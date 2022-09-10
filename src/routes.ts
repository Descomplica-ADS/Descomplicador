import 'reflect-metadata';
import {Router} from 'express';

import {taskRouter} from '@task/task.routes';
import {userRouter} from '@user/user.routes';

const serverRouter = Router();

serverRouter.get('/', (_, res) => res.json({status: 'Ok'}));

serverRouter.use('/user', userRouter);

serverRouter.use('/task', taskRouter);

export {serverRouter};
