import { Server } from 'restify';
// Controllers
import { exampleController } from './controllers/ExampleController';
// Middlewares
import { authenticationMiddleware } from './middlewares/AuthenticationMiddleware';

// Routes
export const routes = (app: Server) => {
  app.get('/', authenticationMiddleware.handle, exampleController.handle);
};
