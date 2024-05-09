import productCatalog from '@/apigw/product-catalog/catalog';
import pagingMiddleware from '@/middlewares/paging.middleware';
import { Request, Response } from 'express';

class ProductCatalogController {
  getCatalogs = [
    pagingMiddleware,
    async (req: Request, res: Response) => {
      const result = await productCatalog.getCatalogs(req.encodedQs || '');
      res.json(result);
    },
  ];

  getCatalog = async (req: Request, res: Response) => {
    const result = await productCatalog.getCatalog(req.params.id);
    res.json(result);
  };

  postCatalog = async (req: Request, res: Response) => {
    const result = await productCatalog.postCatalog(req.body);
    res.json(result);
  };

  patchCatalog = async (req: Request, res: Response) => {
    const result = await productCatalog.patchCatalog(req.params.id, req.body);
    res.json(result);
  };

  deleteCatalog = async (req: Request, res: Response) => {
    const result = await productCatalog.deleteCatalog(req.params.id);
    res.json(result);
  };
}

export default new ProductCatalogController();
