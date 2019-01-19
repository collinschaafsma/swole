import { json } from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import AuthenticationController from './controllers/authentication';
import ProgramController from './controllers/program';
import UserController from './controllers/user';
import IController from './lib/interfaces/controller';
import errorHandler from './middlewares/error_handler';

class App {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.initControllers(
      [
        new AuthenticationController(),
        new ProgramController(),
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
