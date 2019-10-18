import { Environment } from './environment.type';

export const environment: Environment = {
  name: 'dev',
  production: true,
  api: {
    host: 'hoge',
    port: 8000,
    ssl: true,
  },
};
