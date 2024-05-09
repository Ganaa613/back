import { product } from '@mobicom/tmf-dti';
import http from '../http';
import { BadRequestError } from 'http-error-classes';
import { AxiosResponse } from 'axios';

class OfferingPrice {
  getProductOfferPrices = async (query: string) => {
    const resp = await http.get<AxiosResponse>(
      `/productOfferingPrice?${query}`
    );
    const data = resp.data;
    const total = resp.headers['x-total-count'];
    return {
      data,
      total,
    };
  };

  getProductOfferPrice = async (id: string) => {
    try {
      const resp = await http.get<{ data: product.ProductOfferingPrice }>(
        `/productOfferingPrice/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  postProductOfferPrice = async (body: any) => {
    try {
      const reqData = { data: body };
      const resp = await http.post<{ data: product.ProductOfferingPrice }>(
        '/productOfferingPrice',
        reqData
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  patchProductOfferPrice = async (id: string, body: any) => {
    try {
      const reqData = { data: body };
      const resp = await http.patch<{ data: product.ProductOfferingPrice }>(
        `/productOfferingPrice/${id}`,
        reqData
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  deleteProductOfferPrice = async (id: string) => {
    try {
      const resp = await http.delete<{ data: product.ProductOfferingPrice }>(
        `/productOfferingPrice/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };
}

export default new OfferingPrice();
