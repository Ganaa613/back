import { Request, Response } from 'express';
import serviceCategory from '@/apigw/service-catalog/category';
import pagingMiddleware from '@/middlewares/paging.middleware';

class ServiceCategoryController{
  getCategories = [
    pagingMiddleware,
    async (req: Request, res: Response) => {
      const result = await serviceCategory.getCategories(req.encodedQs || '');
      res.json(result);
    },
  ];
  
  getCategory = async (req: Request, res: Response) => {
    const result = await serviceCategory.getCategory(req.params.id);
    res.json(result);
  };

  postCategory = async (req: Request, res: Response) => {
    const result = await serviceCategory.postCategory(req.body);
    res.json(result);
  };

  patchCategory = async (req: Request, res: Response) => {
    const result = await serviceCategory.patchCategory(req.params.id, req.body);
    res.json(result);
  };

  deleteCategory = async (req: Request, res: Response) => {
    const result = await serviceCategory.deleteCategory(req.params.id);
    res.json(result);
  };
}

export default new ServiceCategoryController();
