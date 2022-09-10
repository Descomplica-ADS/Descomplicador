import joi from 'joi';
import {Request, Response, NextFunction} from 'express';
import HTTPError from '@app/helpers/errors/http.error';

export async function signupValidator(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | any> {
  try {
    const bodyValidate = joi.object({
      username: joi.string().min(3).max(30).required().messages({
        'string.base': 'O nome de usuário precisa ser uma string',
        'string.min': 'O nome de usuário precisa ter pelo menos 3 caracteres',
        'string.max': 'O nome de usuário precisa ter no máximo 30 caracteres',
        'string.required': 'O nome de usuário é necessário',
      }),
      name: joi.string().min(5).max(150).required().messages({
        'string.base': 'O campo de nome completo precisa ser uma string',
        'string.min':
          'O campo de nome completo precisa ter pelo menos 5 caracteres',
        'string.max':
          'O campo de nome completo precisa ter no máximo 150 caracteres',
        'string.required': 'O campo de nome completo é necessário',
      }),
      email: joi.string().email().min(12).max(60).required().messages({
        'string.base': 'O campo de email precisa ser uma string',
        'string.min': 'O campo de email precisa ter pelo menos 12 caracteres',
        'string.max': 'O campo de email precisa ter no máximo 60 caracteres',
        'string.required': 'O campo de email é necessário',
      }),
      password: joi
        .string()
        .min(8)
        .max(24)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/)
        .required()
        .messages({
          'string.base': 'O campo de senha precisa ser uma string',
          'string.min': 'O campo de senha precisa ter pelo menos 8 caracteres',
          'string.max': 'O campo de senha precisa ter no máximo 24 caracteres',
          'string.regex':
            'O campo de senha não preenche os requisitos estabelecidos',
          'string.pattern.base':
            'O campo de senha não preenche os requisitos estabelecidos',
          'string.required': 'O campo de senha é necessário',
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
