import { Request, Response } from 'express'

class LogoutController {
  post = async (req: Request, res: Response) => {
    res
      .clearCookie('accessToken', {
        // domain: ''
      })
      .json({
        success: true
      })
  }
}

export default new LogoutController()