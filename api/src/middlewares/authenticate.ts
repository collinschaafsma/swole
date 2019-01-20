import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { prisma } from '../generated/prisma-client';
import HttpException from '../lib/exceptions/http_exception';
import IAuthToken from '../lib/interfaces/auth_token';
import IUserRequest from '../lib/interfaces/user_request';
import { config } from '../lib/utils/config';

export default async function authenticate(req: IUserRequest, res: Response, next: NextFunction) {
  const secret = config.jwtSecret;
  const authHeader = req.get('Authorization');

  if (authHeader) {
    try {
      const token = authHeader.replace('Bearer ', '');
      const decoded = jwt.verify(token, secret) as IAuthToken;
      const id = decoded.id;
      const user = await prisma.user({ id });

      if (user) {
        req.user = user;
        next();
      } else {
        next(new HttpException(401, 'No user with token'));
      }
    } catch (error) {
      next(new HttpException(401, 'Bad token'));
    }
  } else {
    next(new HttpException(401, 'Missing token'));
  }
}
