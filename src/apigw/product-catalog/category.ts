import { BadRequestError } from 'http-error-classes';
import http from '../http';
import { product } from '@mobicom/tmf-dti';
import { AxiosResponse } from 'axios';

class Category {
  getCategories = async (query: string) => {
    const resp = await http.get<AxiosResponse>(`/category?${query}`);
    const data = resp.data;
    const total = resp.headers['x-total-count'];
    return {
      data,
      total,
    };
  };

  getCategory = async (id: string) => {
    try {
      const resp = await http.get<{ data: product.Category }>(
        `/category/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  postCategory = async (body: product.Category) => {
    try {
      const reqData = { data: body };
      const resp = await http.post<{ data: product.Category }>(
        '/category',
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
      const resp = await http.patch<{ data: product.Category }>(
        `/category/${id}`,
        reqData
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  deleteCategory = async (id: string) => {
    try {
      const resp = await http.delete<{ data: product.Category }>(
        `/category/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };
}

export default new Category();
