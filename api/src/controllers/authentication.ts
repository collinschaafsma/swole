import * as bcrypt from 'bcryptjs';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { prisma, User } from '../generated/prisma-client';
import HttpException from '../lib/exceptions/http_exception';
import IAuthToken from '../lib/interfaces/auth_token';
import IController from '../lib/interfaces/controller';
import { config } from '../lib/utils/config';

export default class AuthenticationController implements IController {
  public path = '/auth';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .post(`${this.path}/register`, this.register)
      .post(`${this.path}/login`, this.login);
  }

  private register = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { name, email, password } = req.body;

    const emailExists = await prisma.$exists.user({ email });
    if (emailExists) {
      next(new HttpException(401, 'Email exists'));
    }

    const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const user = await prisma.createUser({
      email,
      name,
      password: hash,
    });

    const authToken = this.authToken(user);
    res.status(201).json({ id: user.id, authToken });
  }

  private login = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { email, password } = req.body;
    const user = await prisma.user({ email });
    if (user) {
      const match  = await bcrypt.compare(password, user.password);

      if (match) {
        const authToken = this.authToken(user);
        res.status(201).json({ id: user.id, authToken });
      } else {
        next(new HttpException(401, 'Invalid password'));
      }
    } else {
      next(new HttpException(401, 'Invalid username'));
    }

  }

  private authToken(user: User): string {
    const secret = config.jwtSecret;
    const tokenData: IAuthToken = {
      id: user.id,
    };

    return jwt.sign(tokenData, secret, { expiresIn: '90d' }); // Expires in 90 days
  }
}
