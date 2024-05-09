import { resource } from '@mobicom/tmf-dti';
import http from '../http.resource';
import { BadRequestError } from 'http-error-classes';
import { AxiosResponse } from 'axios';

class Candidate {
  getCandidates = async (query: string) => {
    const resp = await http.get<AxiosResponse>(`/resourceCandidate?${query}`);
    const data = resp.data;
    const total = resp.headers['x-total-count'];
    return {
      data,
      total,
    };
  };

  getCandidate = async (id: string) => {
    try {
      const resp = await http.get<{ data: resource.Candidate }>(
        `/resourceCandidate/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  postCandidate = async (body: any) => {
    try {
      const reqData = { data: body };
      const resp = await http.post<{ data: resource.Candidate }>(
        '/resourceCandidate',
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
      const resp = await http.patch<{ data: resource.Candidate }>(
        `/resourceCandidate/${id}`,
        reqData
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  deleteCandidate = async (id: string) => {
    try {
      const resp = await http.delete<{ data: resource.Candidate }>(
        `/resourceCandidate/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };
}

export default new Candidate();
