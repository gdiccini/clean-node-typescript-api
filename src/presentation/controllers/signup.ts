import {
  HttpRequest, HttpResponse, Controller, EmailValidator,
} from '../protocols';
import { badRequest, serverError } from '../helpers/http-helper';
import { InvalidParamError, MissingParamError } from '../error';
import { AddAccount } from '../../domain/usecases/add-account';

export default class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;

  private readonly addAccount: AddAccount;

  constructor(emailValidator: EmailValidator, addAccount: AddAccount) {
    this.emailValidator = emailValidator;
    this.addAccount = addAccount;
  }

  handle(httpRequest: HttpRequest): HttpResponse | undefined {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation'];
      // eslint-disable-next-line no-restricted-syntax
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }
      const {
        name, email, password, passwordConfirmation,
      } = httpRequest.body;

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'));
      }

      const isValid = this.emailValidator.isValid(email);
      if (!isValid) {
        return badRequest(new InvalidParamError('email'));
      }
      this.addAccount.add({
        name,
        email,
        password,
      });
      return undefined;
    } catch (error) {
      return serverError();
    }
  }
}
