import { service } from '@mobicom/tmf-dti';
import http from '../http.service';
import { BadRequestError } from 'http-error-classes';
import { AxiosResponse } from 'axios';

class ServiceCandidateController {
  getCandidaties = async (query: string) => {
    const resp = await http.get<AxiosResponse>(`/serviceCandidate?${query}`);
    const data = resp.data;
    const total = resp.headers['x-total-count'];
    return {
      data,
      total,
    };
  };

  getCandidate = async (id: string) => {
    try {
      const resp = await http.get<{ data: service.Candidate }>(
        `/serviceCandidate/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  postCandidate = async (body: any) => {
    try {
      const reqData = { data: body };
      const resp = await http.post<{ data: service.Candidate }>(
        '/serviceCandidate',
        reqData
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  patchCandidate = async (id: string, body: any) => {
    try {
      const reqData = { data: body };
      const resp = await http.patch<{ data: service.Candidate }>(
        `/serviceCandidate/${id}`,
        reqData
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  deleteCandidate = async (id: string) => {
    try {
      const resp = await http.delete<{ data: service.Candidate }>(
        `/serviceCandidate/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };
}

export default new ServiceCandidateController();
