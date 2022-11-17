import { AuthenticationMiddleware } from '../AuthenticationMiddleware';
import { verify } from 'jsonwebtoken';

export class AuthenticationMiddlewareFactory {
  private static middleware: AuthenticationMiddleware;

  static make(): AuthenticationMiddleware {
    if (this.middleware) {
      return this.middleware;
    }
    return this.createInstance();
  }

  private static createInstance(): AuthenticationMiddleware {
    this.middleware = new AuthenticationMiddleware(verify);
    return this.middleware;
  }
}
