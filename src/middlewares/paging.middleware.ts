import { Request, Response, NextFunction } from 'express'
import qs from 'qs'

const handler = (req: Request, res: Response, next: NextFunction) => {
  let page = parseInt(`${req.query.page || 1}`);
  const limit = parseInt(`${req.query.limit || 20}`);

  page = page <= 0 ? 1 : page;

  delete req.query.page

  req.query.offset = ((limit || 0) * (page - 1)).toString()
  req.query.limit = limit.toString()
  req.encodedQs = qs.stringify(req.query)

  next()
}

export default handler