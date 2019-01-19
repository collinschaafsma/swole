import * as express from 'express';
import { prisma } from '../generated/prisma-client';
import IController from '../lib/interfaces/controller';
import IUserRequest from '../lib/interfaces/user_request';
import authenticate from '../middlewares/authenticate';

export default class ProgramController implements IController {
  public path = '/api/v1/programs';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .all(`${this.path}/*`, authenticate)
      .get(this.path, this.list)
      .get(`${this.path}/:id`, this.find)
      .post(this.path, this.create)
      .put(`${this.path}/:id`, this.update)
      .delete(`${this.path}/:id`, this.delete);
  }

  private list = async (req: express.Request, res: express.Response) => {
    const programs = await prisma
      .programs({
        orderBy: 'name_DESC',
        where: {
          deletedAt: null,
        },
      });

    res.json(programs);
  }

  private find = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const program = await prisma.program({ id });

    res.json(program);
  }

  private create = async (req: IUserRequest, res: express.Response) => {
    const { name } = req.body;
    const program = await prisma.createProgram({
      name,
      owner: {
        connect: {
          id: req.user.id,
        },
      },
    });

    res.status(201).json(program);
  }

  private update = async (req: IUserRequest, res: express.Response) => {
    const { id } = req.params;
    const { name } = req.body;
    const programOwner = await prisma.program({ id }).owner();

    if (programOwner.id === req.user.id) { // They can update a program they own
      const program = await prisma.updateProgram({
        data: {
          name,
        },
        where: { id },
      });
      res.status(200).json(program);
    } else {
      res.status(401);
    }
  }

  private delete = async (req: IUserRequest, res: express.Response) => {
    const { id } = req.params;
    const programOwner = await prisma.program({ id }).owner();

    if (programOwner.id === req.user.id) { // They can delete a program they own
      const program = await prisma.updateProgram({
        data: { deletedAt: new Date() },
        where: { id },
      });

      res.status(202).json(program);
    } else {
      res.status(401);
    }
  }
}
