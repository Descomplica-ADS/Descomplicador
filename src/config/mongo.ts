import dotenv from 'dotenv';

dotenv.config();

export const DATABASE_URI_ENV = process.env.DATABASE_URI as string;

export const DATABASE_SESSIONS_COLLECTION_ENV = process.env
  .DATABASE_SESSIONS_COLLECTION as string;
