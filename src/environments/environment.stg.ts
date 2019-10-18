import { Environment } from './environment.type';

export const environment: Environment = {
  name: 'prod',
  production: true,
  api: {
    host: 'hoge',
    port: 8000,
    ssl: true,
  },
};
