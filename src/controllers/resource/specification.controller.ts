import resourceSpecification from '@/apigw/resource-catalog/specification';
import pagingMiddleware from '@/middlewares/paging.middleware';
import { Request, Response } from 'express';

class SpecificationController {
  getSpecifications = [
    pagingMiddleware,
    async (req: Request, res: Response) => {
      const result = await resourceSpecification.getSpecifications(
        req.encodedQs || ''
      );
      res.json(result);
    },
  ];
  getSpecification = async (req: Request, res: Response) => {
    const result = await resourceSpecification.getSpecification(req.params.id);
    res.json(result);
  };

  postSpecification = async (req: Request, res: Response) => {
    const result = await resourceSpecification.postSpecification(req.body);
    res.json(result);
  };

  patchSpecification = async (req: Request, res: Response) => {
    const result = await resourceSpecification.patchSpecification(
      req.params.id,
      req.body
    );
    res.json(result);
  };

  deleteSpecification = async (req: Request, res: Response) => {
    const result = await resourceSpecification.deleteSpecification(
      req.params.id
    );
    res.json(result);
  };
}

export default new SpecificationController();
