import { Request } from 'express';
import { User } from '../../generated/prisma-client';

export default interface IUserRequest extends Request {
  user: User;
}
