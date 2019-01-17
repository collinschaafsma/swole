import * as dotenv from 'dotenv';

dotenv.config();

export interface IConfig {
  appName: string;
  logLevel: string;
  serverPort: number;
  nodeEnv: string;
}

const config: IConfig = {
  appName: process.env.APP_NAME,
  logLevel: process.env.LOG_LEVEL,
  nodeEnv: process.env.NODE_ENV,
  serverPort: +process.env.SERVER_PORT || 30000,
};

export { config };
