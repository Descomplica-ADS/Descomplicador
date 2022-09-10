import {Service} from 'typedi';
import {IService} from '@app/interfaces/service.interface';

import {MainRepository} from '../repositories/main.repository';

import {ISigninRequest, ISigninResponse} from '../interfaces';

@Service()
export class SigninService implements IService {
  constructor(private readonly mainRepository: MainRepository) {}

  execute(request: ISigninRequest): Promise<ISigninResponse> {
    return this.mainRepository.signin(request);
  }
}
