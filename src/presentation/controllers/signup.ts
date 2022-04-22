export default class SignUpController {
  handle(httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        httpRequest,
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
