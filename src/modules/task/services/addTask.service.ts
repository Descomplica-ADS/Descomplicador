import {Service} from 'typedi';

import {IService} from '@app/interfaces/service.interface';

import {MainRepository} from '../repositories/main.repository';
import {IAddTaskRequest, IAddTaskResponse} from '../interfaces';

@Service()
export class AddTaskService implements IService {
  constructor(private readonly mainRepository: MainRepository) {}

  execute(request: IAddTaskRequest): Promise<IAddTaskResponse> {
    return this.mainRepository.addTask(request);
  }
}
