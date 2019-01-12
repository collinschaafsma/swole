import { json } from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { MainRoutes } from './routes/main';

class App {

  public app: express.Application;
  public apiRoutes: MainRoutes = new MainRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.apiRoutes.routes(this.app);
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(json());
  }
}

export default new App().app;
