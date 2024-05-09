import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import routes from '@/routes';
import logger from '@/services/logger.service';
import ErrorMiddleware from '@/middlewares/error.middleware';
import config from './config';

const app: Application = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  morgan('tiny', {
    stream: {
      write(text: string) {
        logger.info(text.replace(/\n/, ''), { tag: 'API' });
      },
    },
  })
);

app.get('/health-check', (req, res) => {
  return res.status(200).send({ status: 'UP' });
});
app.use('/api', routes);
app.use(ErrorMiddleware);

app
  .listen(config.PORT, () => {
    logger.info(`Running on port ${config.PORT}.`);
  })
  .on('error', (err: any) => {
    console.log(err);
  });
