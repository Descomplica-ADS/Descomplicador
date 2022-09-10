import joi from 'joi';
import {Request, Response, NextFunction} from 'express';
import HTTPError from '@app/helpers/errors/http.error';

export async function dataValidator(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | any> {
  try {
    const bodyValidate = joi.object({
      id: joi.string().min(3).max(30).required().messages({
        'string.base': 'O id do usuário precisa ser uma string',
        'string.min': 'O id do usuário precisa ter pelo menos 3 caracteres',
        'string.max': 'O id do usuário precisa ter no máximo 30 caracteres',
        'string.required': 'O id do usuário é necessário',
      }),
    });

    if (!req.body) throw new HTTPError('Body is required', 400);

    const {error} = bodyValidate.validate(req.body);
    const hasError = Boolean(error?.message);

    if (hasError) throw new HTTPError(error?.message ?? 'Bad Request', 400);

    return next();
  } catch (err: any) {
    return res.status(err.status ?? 404).json(err);
  }
}
