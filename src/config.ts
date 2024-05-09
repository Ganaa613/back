import { cleanEnv, str, port, url, host } from 'envalid';

const env = cleanEnv(process.env, {
  HOST: host({ default: 'localhost' }),
  PORT: port({ default: 3000 }),
  LOG_PATH: str(),
  APIGW_URL: url(),
  APIGW_USERNAME: str(),
  APIGW_PASSWORD: str(),
  RSCGW_URL: url(),
  RSCGW_USERNAME: str(),
  RSCGW_PASSWORD: str(),
  SVCGW_URL: url(),
  SVCGW_USERNAME: str(),
  SVCGW_PASSWORD: str(),
  JWT_SECRET_KEY: str(),
  NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
});

export default env;
