/* eslint-disable no-console */

import Mongoose from 'mongoose';
import {MONGO} from '@config/env';

export class Mongo {
  static async connect() {
    return Mongoose.connect(String(MONGO.DATABASE_URI), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => {
        console.log('✔ MongoDB Connected');
      })
      .catch((err) => {
        console.error('❌ ERROR in MongoDB connection', err);
      });
  }
}
