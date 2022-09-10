import {ITaskConsult} from '../database/task';

export interface IGetTasksRequest extends ITaskConsult {
  range?: number;
}
