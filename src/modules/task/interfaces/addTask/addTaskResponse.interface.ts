import {ITask} from '../database/task';

export interface IAddTaskResponse {
  message: string;
  createdTask: ITask;
}
