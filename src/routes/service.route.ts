import { Router } from 'express';
import ServiceCategoryController from '@/controllers/service/category.controller';
import ServiceCatalogController from '@/controllers/service/catalog.controller';
import ServiceSpecificationController from '@/controllers/service/specification.controller';
import ServiceCandidateController from '@/controllers/service/candidate.controller';

class ServiceRouter {
  router: Router = Router();

  constructor() {
    // ---- service catalog

    this.router.get('/catalog', ServiceCatalogController.getCatalogs);
    this.router.get('/catalog/:id', ServiceCatalogController.getCatalog);
    this.router.post('/catalog', ServiceCatalogController.postCatalog);
    this.router.patch('/catalog/:id', ServiceCatalogController.patchCatalog);
    this.router.delete('/catalog/:id', ServiceCatalogController.deleteCatalog);

    // ---- service category

    this.router.get('/category', ServiceCategoryController.getCategories);
    this.router.get('/category/:id', ServiceCategoryController.getCategory);
    this.router.post('/category', ServiceCategoryController.postCategory);
    this.router.patch('/category/:id', ServiceCategoryController.patchCategory);
    this.router.delete(
      '/category/:id',
      ServiceCategoryController.deleteCategory
    );

    // ---- service specification

    this.router.get(
      '/specification',
      ServiceSpecificationController.getSpecifications
    );
    this.router.get(
      '/specification/:id',
      ServiceSpecificationController.getSpecification
    );
    this.router.post(
      '/specification',
      ServiceSpecificationController.postSpecification
    );
    this.router.patch(
      '/specification/:id',
      ServiceSpecificationController.patchSpecification
    );
    this.router.delete(
      '/specification/:id',
      ServiceSpecificationController.deleteSpecification
    );

    // ---- service candidate

    this.router.get('/candidate', ServiceCandidateController.getCandidaties);
    this.router.get('/candidate/:id', ServiceCandidateController.getCandidate);
    this.router.post('/candidate', ServiceCandidateController.postCandidate);
    this.router.patch(
      '/candidate/:id',
      ServiceCandidateController.patchCandidate
    );
    this.router.delete(
      '/candidate/:id',
      ServiceCandidateController.deleteCandidate
    );
  }
}

export default new ServiceRouter().router;
