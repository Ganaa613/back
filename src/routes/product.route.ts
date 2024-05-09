import { Router } from 'express';
import ProductCategoryController from '@/controllers/product/category.controller';
import ProductCatalogController from '@/controllers/product/catalog.controller';
import ProductOfferingPriceController from '@/controllers/product/offer.controller';
import ProductOfferingController from '@/controllers/product/offer.controller';
import ProductSpecificationController from '@/controllers/product/specification.controller';
import { body } from 'express-validator';

class ProductRouter {
  router: Router = Router();

  constructor() {
    // ---- catalog

    this.router.get('/catalog', ProductCatalogController.getCatalogs);
    this.router.get('/catalog/:id', ProductCatalogController.getCatalog);
    this.router.post('/catalog', ProductCatalogController.postCatalog);
    this.router.patch('/catalog/:id', ProductCatalogController.patchCatalog);
    this.router.delete('/catalog/:id', ProductCatalogController.deleteCatalog);

    // ---- category

    /** Get list */
    this.router.get('/category', ProductCategoryController.getCategories);
    /** Get entity by id */
    this.router.get('/category/:id', ProductCategoryController.getCategory);
    /** POST entity*/
    this.router.post('/category', [
      body('description')
        .isLength({ min: 3 })
        .withMessage('Description must be at least 3 characters long'),
    ], ProductCategoryController.postCategory);
    /** PATCH entity by id*/
    this.router.patch('/category/:id', ProductCategoryController.patchCategory);
    /** DELETE entity by id*/
    this.router.delete(
      '/category/:id',
      ProductCategoryController.deleteCategory
    );

    // ---- product offering

    this.router.get('/offering', ProductOfferingController.getProductOffers);
    this.router.get('/offering/:id', ProductOfferingController.getProductOffer);
    this.router.post('/offering', ProductOfferingController.postProductOffer);
    this.router.patch(
      '/offering/:id',
      ProductOfferingController.patchProductOffer
    );
    this.router.delete(
      '/offering/:id',
      ProductOfferingController.deleteProductOffer
    );

    // ---- product offering price

    this.router.get(
      '/offering-price',
      ProductOfferingPriceController.getProductOfferPrices
    );
    this.router.get(
      '/offering-price/:id',
      ProductOfferingPriceController.getProductOfferPrice
    );
    this.router.post(
      '/offering-price',
      ProductOfferingPriceController.postProductOfferPrice
    );
    this.router.patch(
      '/offering-price/:id',
      ProductOfferingPriceController.patchProductOfferPrice
    );
    this.router.delete(
      '/offering-price/:id',
      ProductOfferingPriceController.deleteProductOfferPrice
    );

    // ---- product specification

    this.router.get(
      '/specification',
      ProductSpecificationController.getSpecifications
    );
    this.router.get(
      '/specification/:id',
      ProductSpecificationController.getSpecification
    );
    this.router.post(
      '/specification',
      ProductSpecificationController.postSpecification
    );
    this.router.patch(
      '/specification/:id',
      ProductSpecificationController.patchSpecification
    );
    this.router.delete(
      '/specification/:id',
      ProductSpecificationController.deleteSpecification
    );
  }
}

export default new ProductRouter().router;
