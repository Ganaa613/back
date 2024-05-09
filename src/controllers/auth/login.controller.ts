import { Request, Response } from 'express';
import { BadRequestError } from 'http-error-classes';
import { JWTCookieOptions } from '@/services/jwt.service';

class LoginController {
  post = async (req: Request, res: Response) => {
    const username = req.body['username'];
    const password = req.body['password'];

    if (username != 'admin' || password != 'admin') {
      throw new BadRequestError('Invalid username or password!');
    }

    const token = 'token';
    // jwtService.generate({
    //   userId: 1,
    //   username
    // })

    res.cookie('accessToken', token, JWTCookieOptions).json({
      success: true,
    });
  };
}

export default new LoginController();
