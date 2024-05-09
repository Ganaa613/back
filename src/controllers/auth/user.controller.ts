import { Request, Response } from 'express'
// import authMiddleware from '@/middlewares/auth.middleware'

class UserController {
  get = [
    // authMiddleware,
    async (req: Request, res: Response) => {
      res.json(req.user)
    }
  ]
}

export default new UserController()