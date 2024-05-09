declare namespace auth {
  interface IUser {
    userId: string | number
    username: string
  }
}

declare namespace Express {
  interface Request {
    user: auth.IUser // You can specify an appropriate type for `user` object
    accessToken: string
    encodedQs?: string
  }
}