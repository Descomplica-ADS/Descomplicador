import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, {Application} from 'express';
import 'reflect-metadata';

import {Mongo} from '@database/mongo';

import {PORT} from './env';
import sessionConfiguration from './session.config';

(async () => Mongo.connect())();

const app: Application = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use(cookieParser(sessionConfiguration.secret));

app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization',
  );
  next();
});

app.use(require('express-session')(sessionConfiguration));

export {app, PORT};
