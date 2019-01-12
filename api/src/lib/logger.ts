import * as pino from 'pino';
import { config } from './config';

export const logger = pino({
  level: config.logLevel,
  name: config.appName,
});
