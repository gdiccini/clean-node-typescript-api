export default class SignUpController {
  handle(httpRequest: any): any {
    return {
      httpRequest,
      statusCode: 400,
    };
  }
}
