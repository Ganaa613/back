import serviceCandidate from '@/apigw/service-catalog/candidate';
import { Request, Response } from 'express';
import pagingMiddleware from '@/middlewares/paging.middleware';

class ServiceCandidateController {
  // --- service candidate
  getCandidaties = [
    pagingMiddleware,
    async (req: Request, res: Response) => {
      const result = await serviceCandidate.getCandidaties(req.encodedQs || '');
      res.json(result);
    },
  ];

  getCandidate = async (req: Request, res: Response) => {
    const result = await serviceCandidate.getCandidate(req.params.id);
    res.json(result);
  };

  postCandidate = async (req: Request, res: Response) => {
    const result = await serviceCandidate.postCandidate(req.body);
    res.json(result);
  };

  patchCandidate = async (req: Request, res: Response) => {
    const result = await serviceCandidate.patchCandidate(req.params.id, req.body);
    res.json(result);
  };

  deleteCandidate = async (req: Request, res: Response) => {
    const result = await serviceCandidate.deleteCandidate(req.params.id);
    res.json(result);
  };
}

export default new ServiceCandidateController();
