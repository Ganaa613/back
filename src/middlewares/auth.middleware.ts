import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from 'http-error-classes';
import { JWTCookieOptions } from '@/services/jwt.service';

const handler = (req: Request, res: Response, next: NextFunction) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      throw new BadRequestError();
    }

    const token = 'token';
    // const payload = jwtService.decode<JWTPayload>(token)
    const payload = { userId: 1, username: 'admin' };

    req.user = {
      userId: payload.userId,
      username: payload.username,
    };

    res.cookie('accessToken', token, JWTCookieOptions);

    next();
  } catch (error: any) {
    console.log('auth middleware error: ', error);
    throw new BadRequestError('Invalid access token', {
      status: 1000,
    });
  }
};

export default handler;
