import resourceCategory from '@/apigw/resource-catalog/category';
import pagingMiddleware from '@/middlewares/paging.middleware';
import { Request, Response } from 'express';

class ResourceCategoryController {
  getCategories = [
    pagingMiddleware,
    async (req: Request, res: Response) => {
      const result = await resourceCategory.getCategories(req.encodedQs || '');
      res.json(result);
    },
  ];

  getCategory = async (req: Request, res: Response) => {
    const result = await resourceCategory.getCategory(req.params.id);
    res.json(result);
  };

  postCategory = async (req: Request, res: Response) => {
    const result = await resourceCategory.postCategory(req.body);
    res.json(result);
  };

  patchCategory = async (req: Request, res: Response) => {
    const result = await resourceCategory.patchCategory(
      req.params.id,
      req.body
    );
    res.json(result);
  };

  deleteCategory = async (req: Request, res: Response) => {
    const result = await resourceCategory.deleteCategory(req.params.id);
    res.json(result);
  };
}

export default new ResourceCategoryController();
