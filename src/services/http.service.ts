import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { InternalServerError } from 'http-error-classes';

interface RequestConfig extends AxiosRequestConfig<Record<string, any>> { }

class HttpService {
  readonly instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      withCredentials: false,
      proxy: false,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  }

  private request = async <T>(options: AxiosRequestConfig): Promise<T> => {
    try {
      if (options.url) {
        options.url = encodeURI(options.url);
      }

      return await this.instance.request<T, any>({
        ...options,
      });
    } catch (error: any) {
      // console.log(error);
      if (error && error.response && error.response.data) {
        throw error.response.data;
      } else if (error) {
        throw error;
      }
      throw new InternalServerError('Unhandled error');
    }
  };

  get = async <T>(url: string, options?: RequestConfig): Promise<T> => {
    return await this.request<T>({
      ...options,
      method: 'GET',
      url,
    });
  };

  post = async <T>(url: string, options?: RequestConfig): Promise<T> => {
    return await this.request<T>({
      ...options,
      method: 'POST',
      url,
    });
  };

  put = async <T>(url: string, options?: RequestConfig): Promise<T> => {
    return await this.request<T>({
      ...options,
      method: 'PUT',
      url,
    });
  };

  patch = async <T>(url: string, options?: RequestConfig): Promise<T> => {
    return await this.request<T>({
      ...options,
      method: 'PATCH',
      url,
    });
  };

  delete = async <T>(url: string, options?: RequestConfig): Promise<T> => {
    return await this.request<T>({
      ...options,
      method: 'DELETE',
      url,
    });
  };
}

export default HttpService;
