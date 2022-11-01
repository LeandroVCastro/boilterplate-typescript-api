import { Request, Response, Next } from 'restify';

class ExampleController {
  async handle(req: Request, res: Response, next: Next) {
    res.send({
      testando: 'novo retorno de teste'
    });
    return next();
  }
}

export const exampleController = new ExampleController();
