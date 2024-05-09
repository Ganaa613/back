import serviceCatalog from '@/apigw/service-catalog/catalog';
import pagingMiddleware from '@/middlewares/paging.middleware';
import { Request, Response } from 'express';

class ServiceCatalogController {
  getCatalogs = [
    pagingMiddleware,
    async (req: Request, res: Response) => {
      const result = await serviceCatalog.getCatalogs(req.encodedQs || '');
      res.json(result);
    },
  ];

  getCatalog = async (req: Request, res: Response) => {
    const result = await serviceCatalog.getCatalog(req.params.id);
    res.json(result);
  };

  postCatalog = async (req: Request, res: Response) => {
  const result = await serviceCatalog.postCatalog(req.body);
  res.json(result);
  };

  patchCatalog = async (req: Request, res: Response) => {
  const result = await serviceCatalog.patchCatalog(req.params.id, req.body);
  res.json(result);
  };
  
  deleteCatalog = async (req: Request, res: Response) => {
    const result = await serviceCatalog.deleteCatalog(req.params.id);
    res.json(result);
  };

}

export default new ServiceCatalogController();
