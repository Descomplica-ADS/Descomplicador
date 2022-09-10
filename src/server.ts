/* eslint-disable no-console */
/* eslint-disable import/order */

import {serverRouter} from '@app/routes';
import {app, PORT} from '@config/express.config';

import logMiddleware from './middlewares/log.middleware';

app.use(logMiddleware);

app.use(serverRouter);

app.listen(PORT || 5000, () => {
  console.clear();
  console.log('\n Starting server...');

  console.log(
    `${'\x1b[31m server.js \x1b[0m listening to port \x1b[33m'}${PORT}\x1b[0m`,
  );
  console.log(`\x1b[96m http://localhost:${PORT}\x1b[0m`);
  console.log('\n /**logs**/\n');
});
