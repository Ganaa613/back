import { resource } from '@mobicom/tmf-dti';
import http from '../http.resource';
import { BadRequestError } from 'http-error-classes';
import { AxiosResponse } from 'axios';

class Category {
  getCategories = async (query: string) => {
    const resp = await http.get<AxiosResponse>(`/resourceCategory?${query}`);
    const data = resp.data;
    const total = resp.headers['x-total-count'];
    return {
      data,
      total,
    };
  };

  getCategory = async (id: string) => {
    try {
      const resp = await http.get<{ data: resource.Category }>(
        `/resourceCategory/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  postCategory = async (body: any) => {
    try {
      const reqData = { data: body };
      const resp = await http.post<{ data: resource.Category }>(
        '/resourceCategory',
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
      const resp = await http.patch<{ data: resource.Category }>(
        `/resourceCategory/${id}`,
        reqData
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  deleteCategory = async (id: string) => {
    try {
      const resp = await http.delete<{ data: resource.Category }>(
        `/resourceCategory/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };
}

export default new Category();
