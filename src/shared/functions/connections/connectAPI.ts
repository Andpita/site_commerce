import axios from 'axios';

import {
  ERROR_ACCESS_DANIED,
  ERROR_CONNECTION,
  ERROR_NOT_FOUND,
  ERROR_SERVICE,
} from '../../constants/errorStatus';
import { MethodsEnum } from '../../enums/methods.enum';

export default class ConnectionAPI {
  static async call<T>(url: string, method: string, body?: unknown): Promise<T> {
    switch (method) {
      case MethodsEnum.GET:
        return (await axios.get<T>(url)).data;

      case MethodsEnum.DELETE:
        return (await axios.delete<T>(url)).data;

      case MethodsEnum.POST:
        return (await axios.post<T>(url, body)).data;

      case MethodsEnum.PUT:
        return (await axios.put<T>(url, body)).data;

      case MethodsEnum.PATCH:
      default:
        return (await axios.patch<T>(url, body)).data;
    }
  }

  static async connect<T>(url: string, method: string, body?: unknown): Promise<T> {
    return ConnectionAPI.call<T>(url, method, body).catch((e) => {
      if (e.response) {
        switch (e.response.status) {
          case 401:
            throw new Error(ERROR_ACCESS_DANIED);
          case 403:
            throw new Error(ERROR_ACCESS_DANIED);
          case 404:
            throw new Error(ERROR_NOT_FOUND);
          case 500:
            throw new Error(ERROR_SERVICE);
          default:
            throw new Error(ERROR_CONNECTION);
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
