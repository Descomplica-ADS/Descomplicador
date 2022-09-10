import {Router} from 'express';

import {fileHandler} from '@task/middlewares';

import {addTask, attachTask, getTasks} from './controllers';
import {
  addTaskValidator,
  attachTaskValidator,
  getTasksValidator,
} from './helpers/validators';

const taskRouter = Router();

taskRouter.put('/addTask', addTaskValidator, addTask);
taskRouter.put(
  '/attachTask',
  fileHandler.single('document'),
  attachTaskValidator,
  attachTask,
);
taskRouter.get('/getTasks', getTasksValidator, getTasks);

export {taskRouter};
