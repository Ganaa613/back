import { BadRequestError } from 'http-error-classes';
import http from '../http.service';
import { service } from '@mobicom/tmf-dti';
import { AxiosResponse } from 'axios';

class Category {
  getCategories = async (query: string) => {
    const resp = await http.get<AxiosResponse>(`/serviceCategory?${query}`);
    const data = resp.data;
    const total = resp.headers['x-total-count'];
    return {
      data,
      total,
    };
  };

  getCategory = async (id: string) => {
    try {
      const resp = await http.get<{ data: service.Category }>(
        `/serviceCategory/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  postCategory = async (body: service.Category) => {
    try {
      const reqData = { data: body };
      const resp = await http.post<{ data: service.Category }>(
        '/serviceCategory',
        reqData
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  patchCategory = async (id: string, body: any) => {
    try {
      const reqData = { data: body };
      const resp = await http.patch<{ data: service.Category }>(
        `/serviceCategory/${id}`,
        reqData
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  deleteCategory = async (id: string) => {
    try {
      const resp = await http.delete<{ data: service.Category }>(
        `/serviceCategory/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };
}

export default new Category();
