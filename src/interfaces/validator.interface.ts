import {ObjectSchema} from 'joi';

export interface IValidator {
  headerValidate: ObjectSchema;
  bodyValidate: ObjectSchema;
  queryValidate: ObjectSchema;
}
