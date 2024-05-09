import { Router } from 'express';
import ResourceSpecController from '@/controllers/resource/specification.controller';
import ResourceCatalogController from '@/controllers/resource/catalog.controller';
import ResourceCategoryController from '@/controllers/resource/category.controller';
import ResourceCandidateController from '@/controllers/resource/candidate.controller';

class ResourceRouter {
  router: Router = Router();

  constructor() {
    this.router.get('/catalog', ResourceCatalogController.getCatalogs);
    this.router.get('/catalog/:id', ResourceCatalogController.getCatalog);
    this.router.post('/catalog', ResourceCatalogController.postCatalog);
    this.router.patch('/catalog/:id', ResourceCatalogController.patchCatalog);
    this.router.delete('/catalog/:id', ResourceCatalogController.deleteCatalog);

    this.router.get('/category', ResourceCategoryController.getCategories);
    this.router.get('/category/:id', ResourceCategoryController.getCategory);
    this.router.post('/category', ResourceCategoryController.postCategory);
    this.router.patch(
      '/category/:id',
      ResourceCategoryController.patchCategory
    );
    this.router.delete(
      '/category/:id',
      ResourceCategoryController.deleteCategory
    );

    this.router.get('/candidate', ResourceCandidateController.getCandidates);
    this.router.get('/candidate/:id', ResourceCandidateController.getCandidate);
    this.router.post('/candidate', ResourceCandidateController.postCandidate);
    this.router.patch(
      '/candidate/:id',
      ResourceCandidateController.patchCandidate
    );
    this.router.delete(
      '/candidate/:id',
      ResourceCandidateController.deleteCandidate
    );

    this.router.get('/specification', ResourceSpecController.getSpecifications);
    this.router.get(
      '/specification/:id',
      ResourceSpecController.getSpecification
    );
    this.router.post(
      '/specification',
      ResourceSpecController.postSpecification
    );
    this.router.patch(
      '/specification/:id',
      ResourceSpecController.patchSpecification
    );
    this.router.delete(
      '/specification/:id',
      ResourceSpecController.deleteSpecification
    );
  }
}

export default new ResourceRouter().router;
