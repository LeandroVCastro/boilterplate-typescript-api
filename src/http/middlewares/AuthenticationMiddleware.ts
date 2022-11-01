import { Request, Response, Next } from 'restify';
import { verify } from 'jsonwebtoken';

class AuthenticationMiddleware {
  async handle(req: Request, res: Response, next: Next) {
    if (!req.headers.authorization) {
      res.send(401, { message: 'Token not provided' });
      return next(false);
    }
    try {
      const token = req.headers.authorization.split(' ')[1];
      const secret: string = process.env.SECRET_TOKEN || 'default-secret-token';
      verify(token, secret);
      return next();
    } catch (err) {
      res.send(403, { message: 'Invalid token' });
      return next(false);
    }
  }
}

export const authenticationMiddleware = new AuthenticationMiddleware();
