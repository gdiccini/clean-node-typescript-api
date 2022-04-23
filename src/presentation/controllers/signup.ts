import { HttpRequest, HttpResponse } from '../protocols/http';
import MissingParamError from '../error/missing-param-error';
import badRequest from '../helpers/http-helper';

export default class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse | undefined {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation'];
    // eslint-disable-next-line no-restricted-syntax
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
    return undefined;
  }
}
