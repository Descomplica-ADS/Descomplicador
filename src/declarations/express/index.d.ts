declare namespace Express {
  export interface Request extends Omit<Request, 'session'> {
    session: {
      token: string;
    };
  }
}
