import * as express from 'express';
import { prisma } from '../generated/prisma-client';
import IController from '../lib/controller.interface';
import IUserRequest from '../lib/user_request.interface';

export default class ProgramController implements IController {
  public path = '/api/v1/program';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .get(`${this.path}/:id`, this.find)
      .post(this.path, this.create)
      .put(`${this.path}/:id`, this.update)
      .delete(`${this.path}/:id`, this.delete);
  }

  private find = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { id } = req.params;
    const program = await prisma.user({ id });

    res.json(program);
  }

  private create = async (req: IUserRequest, res: express.Response, next: express.NextFunction) => {
    const { name } = req.body;
    const owner = req.user;
    const program = await prisma.createProgram({
      name,
      owner: {
        connect: {
          id: owner.id,
        },
      },
    });

    res.status(201).json(program);
  }

  private update = async (req: IUserRequest, res: express.Response, next: express.NextFunction) => {
    const { id } = req.params;
    const { name } = req.body;
    const programOwner = await prisma.program({ id }).owner();
    if (programOwner.id === req.user.id) {
      const program = await prisma.updateProgram({
        data: {
          name,
        },
        where: { id },
      });
      res.status(200).json(program);
    } else {
      res.status(500).json({error: 'Not owner'});
    }
  }

  private delete = async (req: IUserRequest, res: express.Response, next: express.NextFunction) => {
    const { id } = req.params;
    const programOwner = await prisma.program({ id }).owner();
    if (programOwner.id === req.user.id) {
      const program = await prisma.updateProgram({
        data: { deletedAt: new Date() },
        where: { id },
      });

      res.status(202).json(program);
    } else {
      res.status(500).json({error: 'Not owner'});
    }
  }
}
