import resourceCandidate from '@/apigw/resource-catalog/candidate';
import pagingMiddleware from '@/middlewares/paging.middleware';
import { Request, Response } from 'express';

class ResourceCandidateController {
  getCandidates = [
    pagingMiddleware,
    async (req: Request, res: Response) => {
      const result = await resourceCandidate.getCandidates(req.encodedQs || '');
      res.json(result);
    },
  ];

  getCandidate = async (req: Request, res: Response) => {
    const result = await resourceCandidate.getCandidate(req.params.id);
    res.json(result);
  };

  postCandidate = async (req: Request, res: Response) => {
    const result = await resourceCandidate.postCandidate(req.body);
    res.json(result);
  };

  patchCandidate = async (req: Request, res: Response) => {
    const result = await resourceCandidate.patchCandidate(
      req.params.id,
      req.body
    );
    res.json(result);
  };

  deleteCandidate = async (req: Request, res: Response) => {
    const result = await resourceCandidate.deleteCandidate(req.params.id);
    res.json(result);
  };
}

export default new ResourceCandidateController();
