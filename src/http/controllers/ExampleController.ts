import { Request, Response } from 'express';

export class ExampleController {
  async handle(req: Request, res: Response) {
    res.status(200).send({
      testando: 'novo retorno de teste'
    });
  }
}
