import {Service} from 'typedi';

import {IService} from '@app/interfaces/service.interface';

import {MainRepository} from '../repositories/main.repository';
import {ISignupRequest, ISignupResponse} from '../interfaces';

@Service()
export class SignupService implements IService {
  constructor(private readonly mainRepository: MainRepository) {}

  execute(request: ISignupRequest): Promise<ISignupResponse> {
    return this.mainRepository.signup(request);
  }
}
