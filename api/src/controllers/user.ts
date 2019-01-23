import * as bcrypt from 'bcryptjs';
import * as express from 'express';
import { prisma } from '../generated/prisma-client';
import HttpException from '../lib/exceptions/http_exception';
import IController from '../lib/interfaces/controller';
import IUserRequest from '../lib/interfaces/user_request';
import authorize from '../lib/utils/authorize';
import wrapAsync from '../lib/utils/wrap_async';
import authenticate from '../middlewares/authenticate';

export default class UserController implements IController {
  public path = '/api/v1/users';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .get(`${this.path}/:id`, authenticate, wrapAsync(this.find))
      .put(`${this.path}/:id`, authenticate, wrapAsync(this.update))
      .delete(`${this.path}/:id`, authenticate, wrapAsync(this.delete));
  }

  private find = async (req: IUserRequest, res: express.Response) => {
    const { id } = req.params;
    const fragment = `
    fragment UserDetail on User {
      name
      email
    }`;

    const users = await prisma
      .users({
        where: {
          AND: [
            {
              id,
            },
            {
              deletedAt: null,
            },
          ],
        },
      })
      .$fragment(fragment);

    res.json(users[0]);
  }

  private update = async (req: IUserRequest, res: express.Response, next: express.NextFunction) => {
    const { id } = req.params;
    authorize(id, req.user.id, next);

    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    }

    if ((req.body.email) && (req.body.email !== req.user.email)) {
      const emailExists = await prisma.$exists.user({ email: req.body.email});
      if (emailExists) {
        next(new HttpException(401, 'Email exists'));
      }
    }

    const user = await prisma.updateUser({
      data: req.body,
      where: { id },
    });

    res.status(200).json(user);
  }

  private delete = async (req: IUserRequest, res: express.Response, next: express.NextFunction) => {
    const { id } = req.params;
    authorize(id, req.user.id, next);

    const user = await prisma.updateUser({
      data: { deletedAt: new Date() },
      where: { id },
    });

    res.status(202).json(user);
  }
}
