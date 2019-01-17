import { json } from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import IController from './lib/controller.interface';
import { logger } from './lib/logger';
import errorHandler from './middleware/error.handler';
import UserController from './user/user.controller';

class App {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.initControllers(
      [
        new UserController(),
      ],
    );
    this.initErrorHandler();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(json());
  }

  private initControllers(controllers: IController[]): void {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  private initErrorHandler(): void {
    this.app.use(errorHandler);
  }
}

export default new App().app;
