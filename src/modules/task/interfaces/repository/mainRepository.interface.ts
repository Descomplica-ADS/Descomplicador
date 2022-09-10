import {IAddTaskRequest, IAddTaskResponse} from '@task/interfaces/addTask';
import {
  IAttachTaskRequest,
  IAttachTaskResponse,
} from '@task/interfaces/attachTask';
import {IGetTasksRequest, IGetTasksResponse} from '@task/interfaces/getTasks';

export interface IMainRepository {
  addTask(request: IAddTaskRequest): Promise<IAddTaskResponse | never>;

  getTasks(request: IGetTasksRequest): Promise<IGetTasksResponse | never>;

  attachTask(request: IAttachTaskRequest): Promise<IAttachTaskResponse | never>;
}
