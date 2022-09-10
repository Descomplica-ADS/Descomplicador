import {ITask} from './task.interface';

export type ITaskConsult = {
  _id?: string;
} & Partial<ITask>;
