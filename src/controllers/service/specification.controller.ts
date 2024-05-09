import serviceSpecification from '@/apigw/service-catalog/specification';
import pagingMiddleware from '@/middlewares/paging.middleware';
import { Request, Response } from 'express';

class serviceSpecificationController {
  getSpecifications = [
    pagingMiddleware,
    async (req: Request, res: Response) => {
      const result = await serviceSpecification.getSpecifications(
        req.encodedQs || ''
      );
      res.json(result);
    },
  ];

  getSpecification = async (req: Request, res: Response) => {
    const result = await serviceSpecification.getSpecification(req.params.id);
    res.json(result);
  };

  postSpecification = async (req: Request, res: Response) => {
    const result = await serviceSpecification.postSpecification(req.body);
    res.json(result);
  };

  patchSpecification = async (req: Request, res: Response) => {
    const result = await serviceSpecification.patchSpecification(
      req.params.id,
      req.body
    );
    res.json(result);
  };

  deleteSpecification = async (req: Request, res: Response) => {
    const result = await serviceSpecification.deleteSpecification(
      req.params.id
    );
    res.json(result);
  };
}

export default new serviceSpecificationController();
