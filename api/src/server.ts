import app from './app';
import { config } from './lib/config';
import { logger } from './lib/logger';

app.listen(config.serverPort);
logger.info(`App / ${config.appName} is listening on port ${config.serverPort}`);
