import { Request, Response, NextFunction } from 'express'
import { HttpError, InternalServerError } from 'http-error-classes'
import logger from '@/services/logger.service'

const handler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const error = err instanceof HttpError ? err : new InternalServerError(err.message || JSON.stringify(err))
  logger.error(error.message, { tag: 'ERROR_HANDLER' })

  res
    .status(error.status)
    .send({
      code: error.status,
      message: err.message,
    })
}

export default handler