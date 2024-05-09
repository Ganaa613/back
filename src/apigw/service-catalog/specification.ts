import { service } from '@mobicom/tmf-dti';
import http from '../http.service';
import { BadRequestError } from 'http-error-classes';
import { AxiosResponse } from 'axios';

class Specification {
  getSpecifications = async (query: string) => {
    const resp = await http.get<AxiosResponse>(
      `/serviceSpecification?${query}`
    );
    const data = resp.data;
    const total = resp.headers['x-total-count'];
    return {
      data,
      total,
    };
  };

  getSpecification = async (id: string) => {
    try {
      const resp = await http.get<{ data: service.Specification }>(
        `/serviceSpecification/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  postSpecification = async (body: any) => {
    try {
      const reqData = { data: body };
      const resp = await http.post<{ data: service.Specification }>(
        '/serviceSpecification',
        reqData
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  patchSpecification = async (id: string, body: any) => {
    try {
      const reqData = { data: body };
      const resp = await http.patch<{ data: service.Specification }>(
        `/serviceSpecification/${id}`,
        reqData
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  deleteSpecification = async (id: string) => {
    try {
      const resp = await http.delete<{ data: service.Specification }>(
        `/serviceSpecification/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };
}

export default new Specification();
