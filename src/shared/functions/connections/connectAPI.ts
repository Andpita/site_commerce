import axios, { AxiosRequestConfig } from 'axios';

import { ERROR_ACCESS_DANIED, ERROR_NOT_FOUND, ERROR_SERVICE } from '../../constants/errorStatus';
import { MethodsEnum } from '../../enums/methods.enum';
import { getAuthorizationToken } from './auth';

export default class ConnectionAPI {
  static async call<T>(url: string, method: string, body?: unknown): Promise<T> {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${getAuthorizationToken()}`,
        'Content-Type': 'application/json',
      },
    };

    switch (method) {
      case MethodsEnum.POST:
      case MethodsEnum.PUT:
      case MethodsEnum.PATCH:
        return (await axios[method]<T>(url, body, config)).data;
      case MethodsEnum.GET:
      case MethodsEnum.DELETE:
        return (await axios[method]<T>(url, config)).data;
      default:
        return (await axios.get<T>(url, config)).data;
    }
  }
  static async connect<T>(url: string, method: string, body?: unknown): Promise<T> {
    return await ConnectionAPI.call<T>(url, method, body).catch((e) => {
      if (e.response) {
        switch (e.response.status) {
          default:
            throw new Error(e.response.data.message);
          case 401:
            throw new Error(ERROR_ACCESS_DANIED);
          case 403:
            throw new Error(ERROR_ACCESS_DANIED);
          case 404:
            throw new Error(ERROR_NOT_FOUND);
          case 500:
            throw new Error(ERROR_SERVICE);
        }
      }
      throw new Error('Unknown Error');
    });
  }
}

export const ConnectionAPIGet = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.GET);
};
export const ConnectionAPIDelete = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.DELETE);
};
export const ConnectionAPIPost = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.POST, body);
};
export const ConnectionAPIPut = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.PUT, body);
};
export const ConnectionAPIPatch = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.PATCH, body);
};
