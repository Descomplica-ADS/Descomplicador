import {AxiosError} from 'axios';
import Container, {Service} from 'typedi';

import FileType from 'file-type';

import DatabaseError, {
  IDatabaseError,
} from '@app/helpers/errors/database.error';
import HTTPError from '@app/helpers/errors/http.error';
import {
  IAddTaskRequest,
  IAttachTaskRequest,
  IGetTasksRequest,
  IGetTasksResponse,
  IMainRepository,
} from '@task/interfaces';
import {GetDataService} from '@user/services/getData.service';

import {TaskMongoose} from '../models/task.model';

const getUserDataService = Container.get(GetDataService);

@Service()
export class MainRepository implements IMainRepository {
  taskModel: TaskMongoose;

  constructor() {
    this.taskModel = new TaskMongoose();
  }

  public async getTasks(request: IGetTasksRequest) {
    const {range, ...req} = request;

    const response = await this.taskModel
      .consult(req)
      .then((res) => res.map((item) => ({...item?.toJSON(), __v: undefined})))
      .catch(MainRepository.handleDatabaseError);

    if (response.length === 0)
      throw new HTTPError('Nenhuma tarefa foi encontrada', 404);

    const documentPromises = response.slice().map((res, i) => {
      if (res.document) {
        // @ts-ignore
        const buffer = res.document?.data as ArrayBuffer;

        return FileType.fromBuffer(Buffer.from(buffer)).then((fileType) => ({
          index: i,
          buffer,
          mimeType: fileType?.mime,
        }));
      }

      return null;
    });

    const mimeTypes = await Promise.all(documentPromises);

    const responseWithDocuments = response.map((res, i) => {
      if (res.document && mimeTypes[i]?.index === i) {
        res.document = {
          // @ts-ignore
          buffer: mimeTypes[i]?.buffer,
          mimeType: mimeTypes[i]?.mimeType,
        };
      }

      return res;
    });

    const userPromises = responseWithDocuments.slice().map((res, i) => {
      return getUserDataService
        .execute({id: res.userCreatedId})
        .then((userWhoCreated) => {
          const userWhoAttached = getUserDataService.execute({
            id: res.userCreatedId,
          });
          return {userWhoCreated, userWhoAttached, index: i};
        });
    });

    const users = await Promise.all(userPromises);

    const formattedResponse = responseWithDocuments.slice().map((res, i) => {
      if (res.userCreatedId && users[i]?.index === i) {
        // @ts-ignore
        res.userWhoCreated = users[i].userWhoCreated;
      }

      if (res.userAttachedId && users[i]?.index === i) {
        // @ts-ignore
        res.userWhoAttached = users[i].userWhoAttached;
      }

      return res;
    });

    const shouldCutByRange = Number(range) > 0;

    const finalResponse = shouldCutByRange
      ? formattedResponse.slice(0, Number(range))
      : formattedResponse;

    if (!finalResponse)
      throw new HTTPError(
        'Algo deu errado. Por favor, tente novamente mais tarde',
        400,
      );

    return ({
      tasks: finalResponse,
    } as unknown) as IGetTasksResponse;
  }

  public async addTask(req: IAddTaskRequest) {
    const {userId, ...request} = req;

    const response = await this.taskModel
      .create({...request, userCreatedId: userId})
      .then((res) => res?.toJSON())
      .catch(MainRepository.handleDatabaseError);

    if (response.name === 'MongoError' && response.code === 11000)
      throw new HTTPError('Já existe uma tarefa com essa identificação', 400);

    return {message: 'Tarefa criada com sucesso!', createdTask: response};
  }

  public async attachTask(request: IAttachTaskRequest) {
    const {id, document, difficulty, description, userId} = request;

    const task = await this.taskModel
      .consultOne({_id: id})
      .then((res) => res?.toJSON())
      .catch(MainRepository.handleDatabaseError);

    if (!task) throw new HTTPError('Task não encontrada', 404);

    await this.taskModel
      .editOne(
        {_id: id},
        {
          document,
          difficulty,
          documentDescription: description,
          userCreatedId: userId,
        },
      )
      .catch(MainRepository.handleDatabaseError);

    return {
      task: {...task, document},
    };
  }

  private static handleDatabaseError(err: IDatabaseError): never {
    throw new DatabaseError(err.name, err.message, err.stack as string);
  }

  private static handleHTTPError(err: AxiosError): never {
    if (err?.response?.data?.message) {
      throw new HTTPError(err?.response?.data?.message, err?.response?.status);
    } else {
      throw new HTTPError(err.message, Number(err.code || 500));
    }
  }
}
