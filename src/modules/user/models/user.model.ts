import mongoose, {Schema, Document} from 'mongoose';

import {IDatabaseError} from '@app/helpers/errors/database.error';
import {IUser, IUserConsult} from '../interfaces/database/user';

const UserSchema = new Schema({
  username: {type: String, required: true, index: {unique: true}},
  name: {type: String, required: true},
  email: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true},
});

type UserType = IUser & Document;

const UserModel = mongoose.model<UserType>('User', UserSchema);

export class UserMongoose extends UserModel {
  public async create({
    username,
    name,
    email,
    password,
  }: IUser): Promise<UserType & IDatabaseError> {
    return UserModel.create({
      username,
      name,
      email,
      password,
    })
      .then((res) => res)
      .catch((err) => err);
  }

  public async consult(
    consult: IUserConsult,
  ): Promise<UserType & IDatabaseError> {
    return UserModel.find(consult)
      .then((res) => res)
      .catch((err) => err);
  }

  public async consultOne(
    consult: IUserConsult,
  ): Promise<UserType & IDatabaseError> {
    return UserModel.findOne(consult)
      .then((res) => res)
      .catch((err) => err);
  }
}
