import { service } from '@mobicom/tmf-dti';
import http from '../http.service';
import { BadRequestError } from 'http-error-classes';
import { AxiosResponse } from 'axios';

class Catalogy {

  getCatalogs = async (query: string) => {
    const resp = await http.get<AxiosResponse>(`/serviceCatalog?${query}`);
    const data = resp.data;
    const total = resp.headers['x-total-count'];
    return {
      data,
      total,
    };
  };

  getCatalog = async (id: string) => {
    try {
      const resp = await http.get<{ data: service.Catalog }>(
        `/serviceCatalog/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  postCatalog = async (body: any) => {
    try {
      const reqData = { data: body };
      const resp = await http.post<{ data: service.Catalog }>(
        '/serviceCatalog',
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
      const resp = await http.patch<{ data: service.Catalog }>(
        `/serviceCatalog/${id}`,
        reqData
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };

  deleteCatalog = async (id: string) => {
    try {
      const resp = await http.delete<{ data: service.Catalog }>(
        `/serviceCatalog/${id}`
      );
      return resp.data;
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  }
}
export default new Catalogy();
