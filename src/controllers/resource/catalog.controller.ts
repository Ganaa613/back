import resourceCatalog from '@/apigw/resource-catalog/catalog';
import pagingMiddleware from '@/middlewares/paging.middleware';
import { Request, Response } from 'express';

class ResourceCatalogController {
  getCatalogs = [
    pagingMiddleware,
    async (req: Request, res: Response) => {
      const result = await resourceCatalog.getCatalogs(req.encodedQs || '');
      res.json(result);
    },
  ];

  getCatalog = async (req: Request, res: Response) => {
    const result = await resourceCatalog.getCatalog(req.params.id);
    res.json(result);
  };

  postCatalog = async (req: Request, res: Response) => {
    const result = await resourceCatalog.postCatalog(req.body);
    res.json(result);
  };

  patchCatalog = async (req: Request, res: Response) => {
    const result = await resourceCatalog.patchCatalog(req.params.id, req.body);
    res.json(result);
  };

  deleteCatalog = async (req: Request, res: Response) => {
    const result = await resourceCatalog.deleteCatalog(req.params.id);
    res.json(result);
  };
}

export default new ResourceCatalogController();
