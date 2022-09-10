import joi from 'joi';
import {Request, Response, NextFunction} from 'express';
import HTTPError from '@app/helpers/errors/http.error';

export async function attachTaskValidator(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | any> {
  try {
    const bodyValidate = joi.object({
      id: joi.string().min(12).max(150).required().messages({
        'string.base': 'O ID da tarefa precisa ser uma string',
        'string.empty': 'O ID da tarefa não pode estar vazio',
        'string.max': 'O ID da tarefa precisa ter no máximo 150 caracteres',
        'any.required': 'O ID da tarefa é necessário',
      }),
      userId: joi.string().min(12).max(150).required().messages({
        'string.base': 'O ID do usuário precisa ser uma string',
        'string.empty': 'O ID do usuário não pode estar vazio',
        'string.max': 'O ID do usuário precisa ter no máximo 150 caracteres',
        'any.required': 'O ID do usuário é necessário',
      }),
      description: joi.string().min(1).max(1000).messages({
        'string.base': 'A descrição da tarefa precisa ser uma string',
        'string.empty': 'A descrição da tarefa não pode estar vazia',
        'string.min':
          'A descrição da tarefa precisa ter pelo menos 1 caractere',
        'string.max':
          'A descrição da tarefa precisa ter no máximo 1000 caracteres',
      }),
      difficulty: joi.number().max(5).required().messages({
        'number.base': 'A dificuldade da tarefa precisa ser um número',
        'number.max': 'A dificuldade da tarefa precisa ser menor ou igual a 5',
        'any.required': 'A dificuldade da tarefa é necessária',
      }),
    });

    if (!req.body) throw new HTTPError('Body is required', 400);

    const {error: bodyError} = bodyValidate.validate(req.body);

    const hasError = Boolean(bodyError?.message);

    if (hasError) throw new HTTPError(bodyError?.message ?? 'Bad Request', 400);

    return next();
  } catch (err: any) {
    return res.status(err?.status ?? 500).json({message: err?.message});
  }
}
