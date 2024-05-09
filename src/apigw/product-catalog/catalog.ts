import { product } from '@mobicom/tmf-dti';
import http from '../http';
import { BadRequestError } from 'http-error-classes';
import { AxiosResponse } from 'axios';

class Catalogy {
  getCatalogs = async (query: string) => {
    const resp = await http.get<AxiosResponse>(`/productCatalog?${query}`);
    const data = resp.data;
    const total = resp.headers['x-total-count'];
    return {
      data,
      total,
    };
  };

  getCatalog = async (id: string) => {
    try {
      const resp = await http.get<{ data: product.Catalog }>(
        `/productCatalog/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  postCatalog = async (body: any) => {
    try {
      const reqData = { data: body };
      const resp = await http.post<{ data: product.Catalog }>(
        '/productCatalog',
        reqData
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  patchCatalog = async (id: string, body: any) => {
    try {
      const reqData = { data: body };
      const resp = await http.patch<{ data: product.Catalog }>(
        `/productCatalog/${id}`,
        reqData
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  deleteCatalog = async (id: string) => {
    try {
      const resp = await http.delete<{ data: product.Catalog }>(
        `/productCatalog/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };
}

export default new Catalogy();
