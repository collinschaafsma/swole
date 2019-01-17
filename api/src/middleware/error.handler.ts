import { NextFunction, Request, Response } from 'express';
import { config } from '../lib/config';
import HttpException from '../lib/HttpException';
import { logger } from '../lib/logger';

export default function errorHandler(error: HttpException, req: Request, res: Response, next: NextFunction) {
  const status = error.status || 500;
  let message = error.message || 'Something went wrong';

  logger.error(error.message);

  if (config.nodeEnv === 'production') {
    message = 'Something went wrong';
  }

  res.status(status).json({ error: message});
}
