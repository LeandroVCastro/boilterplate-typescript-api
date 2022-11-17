import { Request, Response, NextFunction } from 'express';
export class AuthenticationMiddleware {
  constructor(private readonly verify: any) {
    //
  }

  public async handle(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      return res.status(401).send({ message: 'Token not provided' });
    }
    try {
      const token = req.headers.authorization.split(' ')[1];
      const secret: string = process.env.SECRET_TOKEN || 'default-secret-token';
      req.body.payload = this.verify(token, secret);
      return next();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      res.status(403).send({ message: `Invalid token: ${error.message}` });
    }
  }
}
