import mongoose, {
  Schema,
  Document,
  CallbackError,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from 'mongoose';

import {IDatabaseError} from '@app/helpers/errors/database.error';
import {ITask, ITaskConsult} from '../interfaces/database/task';

const TaskSchema = new Schema({
  title: {type: String, required: true},
  subject: {type: String, required: true},
  description: {type: String, required: true},
  userCreatedId: {type: String, required: true},
  userAttachedId: {type: String, required: false},
  documentDescription: {type: String, required: false},
  document: {type: Buffer, required: false},
  dueDate: {type: Date, required: true},
  difficulty: {type: Number, required: false},
  estimatedTime: {type: Number, required: true},
  createdAt: {type: Date, required: true},
  comments: {type: Array, required: false},
});

type TaskType = ITask & Document;

const TaskModel = mongoose.model<TaskType>('Task', TaskSchema);

export class TaskMongoose extends TaskModel {
  public async create(rows: ITask): Promise<TaskType & IDatabaseError> {
    return TaskModel.create(rows)
      .then((res) => res)
      .catch((err) => err);
  }

  public async consult(
    consult: ITaskConsult,
  ): Promise<TaskType[] & IDatabaseError> {
    return TaskModel.find(consult)
      .then((res) => res)
      .catch((err) => err);
  }

  public async consultOne(
    consult: ITaskConsult,
  ): Promise<TaskType & IDatabaseError> {
    return TaskModel.findOne(consult)
      .then((res) => res)
      .catch((err) => err);
  }

  public async editOne(
    filter: FilterQuery<TaskType>,
    update?: UpdateQuery<TaskType> | undefined,
    options?: QueryOptions | null | undefined,
    callback?: ((err: CallbackError, res: any) => void) | undefined,
  ): Promise<TaskType & IDatabaseError> {
    return TaskModel.updateOne(filter, update, options)
      .then((res) => {
        if (callback) callback(null, res);
        return res;
      })
      .catch((err) => {
        if (callback) callback(err, null);
        return err;
      });
  }
}
