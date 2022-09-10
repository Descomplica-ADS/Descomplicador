import {Request, Response} from 'express';
import {Container} from 'typedi';

import {
  AddTaskService,
  AttachTaskService,
  GetTasksService,
} from '@task/services';

const addTaskService = Container.get(AddTaskService);
const getTasksService = Container.get(GetTasksService);
const attachTaskService = Container.get(AttachTaskService);

export async function addTask(req: Request, res: Response) {
  try {
    const taskData = req.body;
    const response = await addTaskService.execute(taskData);

    return res.status(200).json(response);
  } catch (err: any) {
    return res.status(err?.status || 500).json(err);
  }
}

export async function getTasks(req: Request, res: Response) {
  try {
    const tasksData = req.body;
    const response = await getTasksService.execute(tasksData);

    return res.status(200).json(response);
  } catch (err: any) {
    const message =
      err?.response?.message ||
      err?.message ||
      'Algo deu errado. Por favor, tente novamente mais tarde';

    return res.status(err?.status || 500).json({message});
  }
}

export async function attachTask(req: Request, res: Response) {
  try {
    const {id, difficulty, description, userId} = req.body;

    const document = req.file?.buffer;

    const response = await attachTaskService.execute({
      id,
      document,
      difficulty,
      description,
      userId,
    });

    return res.status(200).json(response);
  } catch (err: any) {
    const message =
      err?.response?.message ||
      err?.message ||
      'Algo deu errado. Por favor, tente novamente mais tarde';

    return res.status(err?.status || 500).json({message});
  }
}
