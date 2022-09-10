import {IUser} from '@user/interfaces/database/user';

import {ITask} from '../database/task';

export interface IGetTasksResponse {
  tasks: (Omit<ITask, 'document' | 'userCreatedId' | 'userAttachedId'> & {
    document?: {
      buffer: ArrayBuffer;
      mimeType: string;
    };
    userWhoCreated: IUser;
    userWhoAttached?: IUser;
  })[];
}
