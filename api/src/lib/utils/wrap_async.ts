import { NextFunction, Request, Response } from 'express';

export default function wrapAsync(fn: any) {
  return function(req: Request, res: Response, next: NextFunction) {
    // Make sure to `.catch()` any errors and pass them along to the `next()`
    // middleware in the chain, in this case the error handler.
    fn(req, res, next).catch(next);
  };
}