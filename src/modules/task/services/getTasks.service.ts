import {Service} from 'typedi';

import {IService} from '@app/interfaces/service.interface';
import {dateSortFn} from '@task/helpers/functions';
import {IGetTasksRequest, IGetTasksResponse} from '@task/interfaces';
import {MainRepository} from '@task/repositories/main.repository';

@Service()
export class GetTasksService implements IService {
  constructor(private readonly mainRepository: MainRepository) {}

  async execute(request: IGetTasksRequest): Promise<IGetTasksResponse> {
    const tasks = await this.mainRepository.getTasks(request);

    const sortedTasks = this.sortTasks(tasks);

    return sortedTasks;
  }

  public sortTasks({tasks}: IGetTasksResponse): IGetTasksResponse {
    const sortedTasks = tasks
      .slice()
      .sort((a, b) => dateSortFn(a.dueDate, b.dueDate));

    return {
      tasks: sortedTasks,
    };
  }
}
