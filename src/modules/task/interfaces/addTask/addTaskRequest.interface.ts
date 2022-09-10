import {ITask} from '../database/task';

export interface IAddTaskRequest extends ITask {
  userId: string;
}
