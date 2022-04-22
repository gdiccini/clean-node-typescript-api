export default class SignUpController {
  handle(httpRequest: any): any {
    return {
      httpRequest,
      body: new Error('Missing param: name'),
      statusCode: 400,
    };
  }
}
