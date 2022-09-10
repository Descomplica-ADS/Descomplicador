export default class HTTPError extends Error {
  status: number;

  constructor(message: string, statusCode: number) {
    super();
    this.name = 'HTTP Error';
    this.message = message;
    this.status = statusCode;
  }
}
