import {Service} from 'typedi';

import {AxiosError} from 'axios';

import {
  IGetDataRequest,
  IMainRepository,
  ISigninRequest,
  ISignupRequest,
} from '@user/interfaces';

import HTTPError from '@app/helpers/errors/http.error';
import DatabaseError, {
  IDatabaseError,
} from '@app/helpers/errors/database.error';

import {UserMongoose} from '../models/user.model';

import {encrypt} from '../helpers/security';

@Service()
export class MainRepository implements IMainRepository {
  userModel: UserMongoose;

  constructor() {
    this.userModel = new UserMongoose();
  }

  public async signin(request: ISigninRequest) {
    const password = encrypt(request.password as string);

    const response = await this.userModel
      .consultOne(
        request.username
          ? {username: request.username}
          : {email: request.email},
      )
      .then((user) => user)
      .catch(MainRepository.handleDatabaseError);

    if (!response) throw new HTTPError('Usuário não encontrado', 404);

    if (response.password !== password)
      throw new HTTPError('Senha incorreta', 400);

    return {token: response.id};
  }

  public async signup(request: ISignupRequest) {
    const {username, name, email, password} = request;

    const response = await this.userModel
      .create({
        username,
        name,
        email,
        password: encrypt(password),
      })
      .then((user) => user)
      .catch(MainRepository.handleDatabaseError);

    if (response.name === 'MongoError' && response.code === 11000)
      throw new HTTPError('Usuário já existente', 400);

    return {token: response.id};
  }

  public async getData(request: IGetDataRequest) {
    const {id, ...req} = request;

    const response = await this.userModel
      .consultOne(id ? {_id: id} : req)
      .then((res) => res?.toJSON());

    return {
      username: response?.username,
      name: response?.name,
      email: response?.email,
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
