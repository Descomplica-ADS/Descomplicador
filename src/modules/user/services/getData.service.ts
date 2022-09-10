import {Service} from 'typedi';

import {IService} from '@app/interfaces/service.interface';
import {IGetDataRequest, IGetDataResponse} from '@user/interfaces';
import {MainRepository} from '@user/repositories/main.repository';

@Service()
export class GetDataService implements IService {
  constructor(private readonly mainRepository: MainRepository) {}

  async execute(request: IGetDataRequest): Promise<IGetDataResponse> {
    const data = await this.mainRepository.getData(request);

    if (!data.email) throw new Error('Usuário não encontrado');

    return data;
  }
}
