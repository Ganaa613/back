import productSpecification from '@/apigw/product-catalog/specification';
import pagingMiddleware from '@/middlewares/paging.middleware';
import { Request, Response } from 'express';

class ProductSpecificationController {
  getSpecifications = [
    pagingMiddleware,
    async (req: Request, res: Response) => {
      const result = await productSpecification.getSpecifications(
        req.encodedQs || ''
      );
      res.json(result);
    },
  ];

  getSpecification = async (req: Request, res: Response) => {
    const result = await productSpecification.getSpecification(req.params.id);
    res.json(result);
  };

  postSpecification = async (req: Request, res: Response) => {
    const result = await productSpecification.postSpecification(req.body);
    res.json(result);
  };

  patchSpecification = async (req: Request, res: Response) => {
    const result = await productSpecification.patchSpecification(
      req.params.id,
      req.body
    );
    res.json(result);
  };

  deleteSpecification = async (req: Request, res: Response) => {
    const result = await productSpecification.deleteSpecification(
      req.params.id
    );
    res.json(result);
  };
}

export default new ProductSpecificationController();
