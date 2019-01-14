import * as bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { prisma, User } from '../generated/prisma-client';
import { logger } from '../lib/logger';

export class UserController {

  public async find(req: Request, res: Response) {
    try {
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
    } catch (error) {
      res.status(503).json({ error });
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
      const user = await prisma.createUser({
        email,
        name,
        password: hash,
      });

      res.status(201).json(user);
    } catch (error) {
      logger.error(error);
      res.status(503).json({ error });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;
      const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
      const user = await prisma.updateUser({
        data: { name, email, password: hash },
        where: { id },
      });

      res.status(200).json(user);
    } catch (error) {
      logger.error(error);
      res.status(503).json({ error });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await prisma.updateUser({
        data: { deletedAt: new Date() },
        where: { id },
      });

      res.status(202).json(user);
    } catch (error) {
      logger.error(error);
      res.status(503).json({ error });
    }
  }
}
