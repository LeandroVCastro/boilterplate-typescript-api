import { ExampleController } from '../ExampleController';

export class ExampleControllerFactory {
  private static controller: ExampleController | null = null;

  static make(): ExampleController {
    if (this.controller) {
      return this.controller;
    }
    return new ExampleController();
  }
}
