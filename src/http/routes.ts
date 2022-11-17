import { Router } from 'express';
import { middlewareAdapter } from '../adpters/middlewareAdapter';
import { controllerAdapter } from '../adpters/controllerAdapter';
// Controllers
import { exampleController } from './controllers';
// Middlewares
import { authenticationMiddleware } from './middlewares';

// Routes
export const routes = (router: Router) => {
  router.get(
    '/',
    middlewareAdapter(authenticationMiddleware),
    controllerAdapter(exampleController)
  );
};
