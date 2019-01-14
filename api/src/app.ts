import { json } from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { ApiV1UserRoutes } from './routes/api/v1/user';
import { MainRoutes } from './routes/main';

class App {

  public app: express.Application;
  public mainRoutes: MainRoutes = new MainRoutes();
  public apiV1UserRoutes: ApiV1UserRoutes = new ApiV1UserRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.mainRoutes.routes(this.app);
    this.apiV1UserRoutes.routes(this.app);
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(json());
  }
}

export default new App().app;
