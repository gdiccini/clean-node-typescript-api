import { HttpRequest, HttpResponse } from '../protocols/http';

export default class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        body: new Error('Missing param: name'),
        statusCode: 400,
      };
    }
    return {
      statusCode: 400,
      body: new Error('Missing param: email'),
    };
  }
}
