import { Request, Response } from 'express';

export const controllerAdapter = (controller: any) => {
  return async (req: Request, res: Response): Promise<void> => {
    return await controller.handle(req, res);
  };
};
