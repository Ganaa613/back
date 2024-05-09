import HttpService from '@/services/http.service';
import config from '@/config';
import logger from '@/services/logger.service';
import dayjs from 'dayjs';
import { getUuid } from '@/utils';

const http = new HttpService(config.APIGW_URL);
const base64str = btoa(`${config.APIGW_USERNAME}:${config.APIGW_PASSWORD}`);
const authorization = `Basic ${base64str}`;

http.instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = authorization;
    config.headers.CorrelationId = getUuid();
    config.headers['start-time'] = dayjs();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.instance.interceptors.response.use(
  (response) => {
    const execTime = dayjs().diff(response.config.headers['start-time'], 'ms');
    const method = response.config.method?.toUpperCase();
    const url = response.config.url;
    const contentLength = response.headers['content-length'];
    // const data = JSON.stringify(response.data)
    logger.info(
      `${method} ${url} ${''} ${
        response.status
      } ${contentLength} kb - ${execTime} ms`,
      { tag: 'APIGW' }
    );

    return response;
  },
  (error) => {
    const method = error.request.method;
    const url = error.config.url;
    const execTime = dayjs().diff(error.config.headers['start-time'], 'ms');
    logger.error(`${method} ${url} ${error.response.status} - ${execTime} ms`, {
      tag: 'APIGW',
    });
    return Promise.reject(error);
  }
);

export default http;
