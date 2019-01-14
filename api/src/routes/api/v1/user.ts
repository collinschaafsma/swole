import * as express from 'express';
import { UserController } from '../../../controllers/user';

export class ApiV1UserRoutes {

  public userController: UserController = new UserController();

  public routes(app: express.Application): void {
    app.route(`/api/v1/user/:id`)
      .get(this.userController.find);

    app.route(`/api/v1/user`)
      .post(this.userController.create);

    app.route(`/api/v1/user/:id`)
      .put(this.userController.update);

    app.route(`/api/v1/user/:id`)
      .delete(this.userController.delete);
  }
}
