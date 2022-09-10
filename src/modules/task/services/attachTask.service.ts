import {Service} from 'typedi';

import {IService} from '@app/interfaces/service.interface';
import {IAttachTaskRequest, IAttachTaskResponse} from '@task/interfaces';
import {MainRepository} from '@task/repositories/main.repository';

@Service()
export class AttachTaskService implements IService {
  constructor(private readonly mainRepository: MainRepository) {}

  execute(request: IAttachTaskRequest): Promise<IAttachTaskResponse> {
    return this.mainRepository.attachTask(request);
  }
}
