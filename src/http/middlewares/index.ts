import { AuthenticationMiddlewareFactory } from './factories/AuthenticationMiddlewareFactory';

// Duplicate this line to export more controllers
export const authenticationMiddleware = AuthenticationMiddlewareFactory.make();
