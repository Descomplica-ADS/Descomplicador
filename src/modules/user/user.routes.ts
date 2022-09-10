import {Router} from 'express';

import {signin, signup, getData} from './controllers';
import {
  signinValidator,
  signupValidator,
  dataValidator,
} from './helpers/validators';

const userRouter = Router();

userRouter.post('/signin', signinValidator, signin);
userRouter.post('/signup', signupValidator, signup);
userRouter.post('/data', dataValidator, getData);

export {userRouter};
