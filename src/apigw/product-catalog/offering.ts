import { product } from '@mobicom/tmf-dti';
import http from '../http';
import { BadRequestError } from 'http-error-classes';
import { AxiosResponse } from 'axios';

class Offering {
  getProductOffers = async (query: string) => {
    const resp = await http.get<AxiosResponse>(`/productOffering?${query}`);
    const data = resp.data;
    const total = resp.headers['x-total-count'];
    return {
      data,
      total,
    };
  };

  getProductOffer = async (id: string) => {
    try {
      const resp = await http.get<{ data: product.ProductOffering }>(
        `/productOffering/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  postProductOffer = async (body: any) => {
    try {
      const reqData = { data: body };
      const resp = await http.post<{ data: product.ProductOffering }>(
        '/productOffering',
        reqData
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  patchProductOffer = async (id: string, body: any) => {
    try {
      const reqData = { data: body };
      const resp = await http.patch<{ data: product.ProductOffering }>(
        `/productOffering/${id}`,
        reqData
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  deleteProductOffer = async (id: string) => {
    try {
      const resp = await http.delete<{ data: product.ProductOffering }>(
        `/productOffering/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };
}

export default new Offering();
