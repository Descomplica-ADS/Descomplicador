import {Container} from 'typedi';

import {Request, Response} from 'express';

import {SigninService, SignupService, GetDataService} from '@user/services';

const signinService = Container.get(SigninService);
const signupService = Container.get(SignupService);
const getDataService = Container.get(GetDataService);

export async function signin(req: Request, res: Response) {
  try {
    const request = req.body;
    const response = await signinService.execute(request);

    req.session.token = response.token;

    return res.status(200).json(response);
  } catch (err: any) {
    return res.status(err?.status || 500).json(err);
  }
}

export async function signup(req: Request, res: Response) {
  try {
    const {username, name, email, password} = req.body;
    const response = await signupService.execute({
      username,
      name,
      email,
      password,
    });

    req.session.token = response.token;

    return res.status(200).json(response);
  } catch (err: any) {
    return res.status(err?.status || 500).json(err);
  }
}

export async function getData(req: Request, res: Response) {
  try {
    const {id} = req.body;

    const response = await getDataService.execute({id});

    return res.status(200).json(response);
  } catch (err: any) {
    const message =
      err?.response?.message ||
      err?.message ||
      'Algo deu errado. Por favor, tente novamente mais tarde';

    return res.status(err?.status || 500).json({message});
  }
}
