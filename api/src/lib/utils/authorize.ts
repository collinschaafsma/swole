import { NextFunction } from 'express';
import HttpException from '../exceptions/http_exception';
import IUserRequest from '../interfaces/user_request';

export default function authorize(subjectOwner: string, actor: string, next: NextFunction) {
  if (subjectOwner !== actor) {
    next(new HttpException(401, 'Unauthorized'));
  }
}
