import { Request, Response, NextFunction } from 'express';

export const middlewareAdapter = (middleware: any) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    return await middleware.handle(req, res, next);
  };
};
