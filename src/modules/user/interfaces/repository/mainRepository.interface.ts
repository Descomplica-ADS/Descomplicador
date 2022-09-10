import {IGetDataRequest, IGetDataResponse} from '@user/interfaces/getData';
import {ISigninRequest, ISigninResponse} from '@user/interfaces/signin';
import {ISignupRequest, ISignupResponse} from '@user/interfaces/signup';

export interface IMainRepository {
  signin(request: ISigninRequest): Promise<ISigninResponse | never>;

  signup(request: ISignupRequest): Promise<ISignupResponse | never>;

  getData(request: IGetDataRequest): Promise<IGetDataResponse | never>;
}
