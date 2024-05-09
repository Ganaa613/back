import 'express-async-errors';
import { Router } from 'express';
// import authMiddlware from '@/middlewares/auth.middleware';
import AuthRoute from './auth.route';
import ProductRoute from './product.route';
import ResourceRoute from './resource.route';
import ServiceRoute from './service.route'

class AppRouter {
  router: Router = Router({
    strict: true,
  });

  constructor() {
    this.router.use('/auth', AuthRoute); // this line must be before authMiddleware
    // this.router.use(authMiddlware);
    this.router.use('/product-catalog', ProductRoute);
    this.router.use('/resource-catalog', ResourceRoute);
    this.router.use('/service-catalog', ServiceRoute);
  }
}

export default new AppRouter().router;
