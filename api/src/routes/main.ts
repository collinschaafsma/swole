import * as express from 'express';
import { MainController } from '../controllers/main';

export class MainRoutes {

  public mainController: MainController = new MainController();

  public routes(app: express.Application): void {
    app.route('/')
      .get(this.mainController.index);
  }
}
