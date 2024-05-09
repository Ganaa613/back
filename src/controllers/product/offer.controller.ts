import producOffer from '@/apigw/product-catalog/offering';
import producOfferPrice from '@/apigw/product-catalog/offering.price';
import { Request, Response } from 'express';
import pagingMiddleware from '@/middlewares/paging.middleware';

class ProductOfferController {
  // --- product offering
  getProductOffers = [
    pagingMiddleware,
    async (req: Request, res: Response) => {
      const result = await producOffer.getProductOffers(req.encodedQs || '');
      res.json(result);
    },
  ];

  getProductOffer = async (req: Request, res: Response) => {
    const result = await producOffer.getProductOffer(req.params.id);
    res.json(result);
  };

  postProductOffer = async (req: Request, res: Response) => {
    const result = await producOffer.postProductOffer(req.body);
    res.json(result);
  };

  patchProductOffer = async (req: Request, res: Response) => {
    const result = await producOffer.patchProductOffer(req.params.id, req.body);
    res.json(result);
  };

  deleteProductOffer = async (req: Request, res: Response) => {
    const result = await producOffer.deleteProductOffer(req.params.id);
    res.json(result);
  };

  // --- product offering price

  getProductOfferPrices = [
    pagingMiddleware,
    async (req: Request, res: Response) => {
      const result = await producOfferPrice.getProductOfferPrices(
        req.encodedQs || ''
      );
      res.json(result);
    },
  ];

  getProductOfferPrice = async (req: Request, res: Response) => {
    const result = await producOfferPrice.getProductOfferPrice(req.params.id);
    res.json(result);
  };

  postProductOfferPrice = async (req: Request, res: Response) => {
    const result = await producOfferPrice.postProductOfferPrice(req.body);
    res.json(result);
  };

  patchProductOfferPrice = async (req: Request, res: Response) => {
    const result = await producOfferPrice.patchProductOfferPrice(
      req.params.id,
      req.body
    );
    res.json(result);
  };

  deleteProductOfferPrice = async (req: Request, res: Response) => {
    const result = await producOfferPrice.deleteProductOfferPrice(
      req.params.id
    );
    res.json(result);
  };
}

export default new ProductOfferController();
