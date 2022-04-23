import { HttpRequest, HttpResponse } from '../protocols/http';
import MissingParamError from '../error/missing-param-error';

export default class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        body: new MissingParamError('name'),
        statusCode: 400,
      };
    }
    return {
      statusCode: 400,
      body: new MissingParamError('email'),
    };
  }
}
