import { resource } from '@mobicom/tmf-dti';
import http from '../http.resource';
import { AxiosResponse } from 'axios';
import { BadRequestError } from 'http-error-classes';

class Specification {
  getSpecifications = async (query: string) => {
    const resp = await http.get<AxiosResponse>(
      `/resourceSpecification?${query}`
    );
    return { data: resp.data, total: resp.headers['x-total-count'] };
  };
  getSpecification = async (id: string) => {
    try {
      const resp = await http.get<{ data: resource.Specification }>(
        `/resourceSpecification/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  postSpecification = async (body: any) => {
    try {
      const reqData = { data: body };
      const resp = await http.post<{ data: resource.Specification }>(
        '/resourceSpecification',
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
      const resp = await http.patch<{ data: resource.Specification }>(
        `/resourceSpecification/${id}`,
        reqData
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  deleteSpecification = async (id: string) => {
    try {
      const resp = await http.delete<{ data: resource.Specification }>(
        `/resourceSpecification/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };
}

export default new Specification();
