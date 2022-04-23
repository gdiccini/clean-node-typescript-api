import { HttpResponse } from '../protocols/http';

export default (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});
