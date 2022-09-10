import dotenv from 'dotenv';

dotenv.config();

export const PORT_ENV = (process.env.PORT as unknown) as number;
