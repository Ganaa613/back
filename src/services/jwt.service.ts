import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '@/config'
import dayjs from 'dayjs';

export type JWTPayload = auth.IUser & JwtPayload

export const JWTCookieOptions = {
  httpOnly: true,
  path: '/',
  // sameSite: true,
  secure: config.isProd,
  expires: dayjs().add(1, 'hour').toDate()
}

class JWTService {
  private readonly jwtid = 'jwt-id';

  private get secretKey(): string {
    return config.JWT_SECRET_KEY
  }

  generate = (payload: JWTPayload): string => {
    return jwt.sign(payload, this.secretKey, {
      jwtid: this.jwtid,
      expiresIn: '10m'
    });
  }

  refresh = (token: string): string => {
    const payload = this.verify<JWTPayload>(token)
    delete payload.iat;
    delete payload.exp;
    delete payload.nbf;
    delete payload.jti;

    return this.generate(payload)
  }

  verify = <T>(token: string): T => {
    return jwt.verify(token, this.secretKey) as T;
  }

  decode = <T>(token: string): T => {
    return jwt.decode(token) as T;
  }
}

export default new JWTService()