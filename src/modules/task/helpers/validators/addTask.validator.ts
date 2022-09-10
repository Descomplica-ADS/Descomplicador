import joi from 'joi';
import {Request, Response, NextFunction} from 'express';
import HTTPError from '@app/helpers/errors/http.error';

import {isDateValid} from './data.validator';

export async function addTaskValidator(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | any> {
  try {
    const bodyValidate = joi.object({
      title: joi.string().min(4).max(150).required().messages({
        'string.base': 'O título da tarefa precisa ser uma string',
        'string.empty': 'O título da tarefa não pode estar vazio',
        'string.min': 'O título da tarefa precisa ter pelo menos 4 caracteres',
        'string.max': 'O título da tarefa precisa ter no máximo 150 caracteres',
        'string.required': 'O título da tarefa é necessário',
      }),
      subject: joi.string().min(2).max(40).required().messages({
        'string.base': 'O tipo da tarefa precisa ser uma string',
        'string.empty': 'O tipo da tarefa não pode estar vazio',
        'string.min': 'O tipo da tarefa precisa ter pelo menos 2 caracteres',
        'string.max': 'O tipo da tarefa precisa ter no máximo 40 caracteres',
        'string.required': 'O tipo da tarefa é necessário',
      }),
      description: joi.string().min(1).max(1000).required().messages({
        'string.base': 'A descrição da tarefa precisa ser uma string',
        'string.empty': 'A descrição da tarefa não pode estar vazia',
        'string.min':
          'A descrição da tarefa precisa ter pelo menos 1 caractere',
        'string.max':
          'A descrição da tarefa precisa ter no máximo 1000 caracteres',
        'string.required': 'A descrição da tarefa é necessária',
      }),
      document: joi.binary().messages({
        'binary.base': 'Documento inválido',
      }),
      dueDate: joi.date().required().messages({
        'date.base': 'A data de entrega precisa ser uma data',
        'date.required': 'A data de entrega é necessária',
      }),
      difficulty: joi.number().min(0).max(5).required().messages({
        'number.base': 'A dificuldade da tarefa precisa ser um número',
        'number.min': 'A dificuldade da tarefa precisa ser maior ou igual a 0',
        'number.max': 'A dificuldade da tarefa precisa ser menor ou igual a 5',
        'number.required': 'A dificuldade da tarefa precisa ser um número',
      }),
      estimatedTime: joi.number().min(0).max(100).required().messages({
        'number.base':
          'A estimativa do esforço da tarefa precisa ser um número',
        'number.min':
          'A estimativa do esforço da tarefa precisa ser maior ou igual a 0',
        'number.max':
          'A estimativa do esforço da tarefa precisa ser menor ou igual a 100',
        'number.required':
          'A estimativa do esforço da tarefa precisa ser um número',
      }),
      userId: joi.string().min(12).max(150).required().messages({
        'string.base': 'O ID do usuário precisa ser uma string',
        'string.empty': 'O ID do usuário não pode estar vazio',
        'string.max': 'O ID do usuário precisa ter no máximo 150 caracteres',
        'any.required': 'O ID do usuário é necessário',
      }),
      createdAt: joi.date().required().messages({
        'date.base': 'A data de criação da tarefa precisa ser uma data',
        'string.empty': 'A data de criação não pode estar vazia',
        'date.required': 'A data de criação da tarefa precisa ser especificada',
      }),
    });

    if (!req.body) throw new HTTPError('Body is required', 400);

    const {error} = bodyValidate.validate(req.body);
    const hasError = Boolean(error?.message);

    if (hasError) throw new HTTPError(error?.message ?? 'Bad Request', 400);

    if (!isDateValid(req.body.dueDate) || !isDateValid(req.body.createdAt))
      throw new HTTPError(
        'Algum campo de data foi especificado incorretamente',
        400,
      );

    return next();
  } catch (err: any) {
    return res.status(err?.status ?? 500).json({message: err?.message});
  }
}
