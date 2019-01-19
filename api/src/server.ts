import app from './app';
import { config } from './lib/utils/config';
import { logger } from './lib/utils/logger';

app.listen(config.serverPort);
logger.info(`App / ${config.appName} is listening on port ${config.serverPort}`);
