import { Request, Response } from 'express';
import productCategory from '@/apigw/product-catalog/category';
import pagingMiddleware from '@/middlewares/paging.middleware';
// import { product } from "@mobicom/tmf-dti";
// import { validationResult } from "express-validator";

class ProductCategoryController {
  getCategories = [
    pagingMiddleware,
    async (req: Request, res: Response) => {
      const result = await productCategory.getCategories(req.encodedQs || '');
      res.json(result);
    },
  ];

  getCategory = async (req: Request, res: Response) => {
    const result = await productCategory.getCategory(req.params.id);
    res.json(result);
  };

  postCategory = async (req: Request, res: Response) => {
    // const errors = validationResult(req);
    // if (!req.body || Object.keys(req.body).length === 0) {
    //   return res.status(400).json({ error: 'Request body is empty' });
    // }
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    // const versionRegex1 = /^\d+\.\d+$/;
    // const versionRegex2 = /^\d+\.\d+\.\d+$/;

    // const request: product.Category = req.body;

    // if (
    //   !versionRegex1.test(request.version) &&
    //   !versionRegex2.test(request.version)
    // ) {
    //   return res.status(400).json({ error: 'Invalid version format' });
    // }
    const result = await productCategory.postCategory(req.body);
    res.json(result);
  };

  patchCategory = async (req: Request, res: Response) => {
    const result = await productCategory.patchCategory(req.params.id, req.body);
    res.json(result);
  };

  deleteCategory = async (req: Request, res: Response) => {
    const result = await productCategory.deleteCategory(req.params.id);
    res.json(result);
  };
}

export default new ProductCategoryController();
