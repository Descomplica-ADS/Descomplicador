import {Error as MongooseError} from 'mongoose';

export default class DatabaseError extends Error {
  constructor(name: string, message: string, stack: string) {
    super();
    this.name = name;
    this.message = message;
    this.stack = stack;
  }
}

export interface IDatabaseError extends MongooseError {
  driver: boolean;
  name: 'MongoError' | string;
  index: number;
  code: number;
  keyPattern: object;
  keyValue: object;
}
