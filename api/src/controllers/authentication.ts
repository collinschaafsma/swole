import * as bcrypt from 'bcryptjs';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { prisma } from '../generated/prisma-client';
import IAuthToken from '../lib/interfaces/auth_token';
import IController from '../lib/interfaces/controller';
import { config } from '../lib/utils/config';

export default class UserController implements IController {
  public path = '/auth';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .post(`${this.path}/register`, this.register)
      .post(`${this.path}/login`, this.login)
      .post(`${this.path}/logout`, this.logout);
  }

  private register = async (req: express.Request, res: express.Response) => {
    const { name, email, password } = req.body;
    const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const user = await prisma.createUser({
      email,
      name,
      password: hash,
    });

    const secret = config.jwtSecret;
    const tokenData: IAuthToken = {
      id: user.id,
    };

    const authToken = jwt.sign(tokenData, secret);
    res.status(201).json({ id: user.id, authToken });
  }

  private login = async (req: express.Request, res: express.Response) => {

  }

  private logout = async (req: express.Request, res: express.Response) => {

  }
}
