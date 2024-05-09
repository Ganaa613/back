import 'winston-daily-rotate-file';
import winston from 'winston';

const meta = (info: winston.Logform.TransformableInfo) => {
  info.META = info.tag || 'APP';
  return info;
};

const fileTransport = new winston.transports.DailyRotateFile({
  filename: '%DATE%.log',
  dirname: process.env.LOG_PATH || 'logs',
  datePattern: 'YYYYMMDD',
  zippedArchive: true,
  // maxSize: '20m',
  maxFiles: '14d',
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD,HH:mm:ss' }),
    // winston.format.align(),
    winston.format(meta)(),
    winston.format.printf((info: winston.Logform.TransformableInfo) => {
      return `${info.timestamp} ${info.level.toUpperCase()} ${info.META} :: ${
        info.message
      }`;
    })
  ),
});

const consoleTransport = new winston.transports.Console({
  level: 'debug',
  // format: winston.format.json(),
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    // winston.format.colorize(),
    // winston.format.simple(),
    winston.format(meta)(),
    winston.format.printf((info: winston.Logform.TransformableInfo) => {
      return `${info.timestamp} ${info.level.toUpperCase()} ${info.message}`;
    }),
    winston.format.json()
  ),
});

const logger = winston.createLogger({
  transports: [fileTransport, consoleTransport],
});

export default logger;
