import joi from 'joi';
import {Request, Response, NextFunction} from 'express';
import HTTPError from '@app/helpers/errors/http.error';

export async function getTasksValidator(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | any> {
  try {
    const bodyValidate = joi.object({
      _id: joi.string().max(150).messages({
        'string.base': 'O ID da tarefa precisa ser uma string',
        'string.empty': 'O ID não pode estar vazio',
        'string.max': 'O ID da tarefa precisa ter no máximo 150 caracteres',
      }),
      title: joi.string().max(150).messages({
        'string.base': 'O título da tarefa precisa ser uma string',
        'string.empty': 'O título da tarefa não pode estar vazio',
        'string.max': 'O título da tarefa precisa ter no máximo 150 caracteres',
      }),
      subject: joi.string().max(40).messages({
        'string.base': 'O tipo da tarefa precisa ser uma string',
        'string.empty': 'O tipo da tarefa não pode estar vazio',
        'string.max': 'O tipo da tarefa precisa ter no máximo 40 caracteres',
      }),
      description: joi.string().max(1000).messages({
        'string.base': 'A descrição da tarefa precisa ser uma string',
        'string.empty': 'A descrição da tarefa não pode estar vazia',
        'string.max':
          'A descrição da tarefa precisa ter no máximo 1000 caracteres',
      }),
      document: joi.binary().messages({
        'binary.base': 'Documento inválido',
      }),
      dueDate: joi.date().messages({
        'date.base': 'A data de entrega precisa ser uma data',
      }),
      difficulty: joi.number().max(5).messages({
        'number.base': 'A dificuldade da tarefa precisa ser um número',
        'number.max': 'A dificuldade da tarefa precisa ser menor ou igual a 5',
      }),
      estimatedTime: joi.number().max(100).messages({
        'number.base':
          'A estimativa do esforço da tarefa precisa ser um número',
        'number.max':
          'A estimativa do esforço da tarefa precisa ser menor ou igual a 100',
      }),
      createdAt: joi.date().messages({
        'date.base': 'A data de criação da tarefa precisa ser uma data',
        'string.empty': 'A data de criação não pode estar vazia',
      }),
      range: joi.number().min(0).messages({
        'number.base': 'O range de busca da tarefa precisa ser um número',
        'number.max': 'O range de busca da tarefa precisa ser maior que 0',
      }),
    });

    if (!req.body) throw new HTTPError('Body is required', 400);

    if (req.body.id && Object.keys(req.body).length > 2)
      throw new HTTPError(
        "Não é permitido especificar mais de um parâmetro seguido do ID além de 'range'",
        400,
      );

    const {error} = bodyValidate.validate(req.body);
    const hasError = Boolean(error?.message);

    if (hasError) throw new HTTPError(error?.message ?? 'Bad Request', 400);

    return next();
  } catch (err: any) {
    return res.status(err?.status ?? 500).json({message: err?.message});
  }
}
