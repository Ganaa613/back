import { Router } from 'express';
import UserController from '@/controllers/auth/user.controller'
import LoginController from '@/controllers/auth/login.controller'
import LogoutController from '@/controllers/auth/logout.controller'

class AuthRouter {
  router: Router = Router()

  constructor() {
    this.router.get('/get-user', UserController.get)
    this.router.post('/login', LoginController.post)
    this.router.post('/logout', LogoutController.post)
  }
}

export default new AuthRouter().router