import { useState } from 'react';

import { AuthType } from '../../modules/login/types/AuthType';
import { ERROR_INVALID_PASSWORD } from '../constants/errorStatus';
import { URL_AUTH } from '../constants/urls';
import { setAuthorizationToken } from '../functions/connections/auth';
import ConnectionAPI, { ConnectionAPIPost } from '../functions/connections/connectAPI';
import { useGlobalContext } from './UseGlobalContext';

export const useRequest = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification, setUser } = useGlobalContext();

  const request = async <T>(
    url: string,
    method: string,
    saveGlobal?: (obj: T) => void,
    body?: unknown,
  ): Promise<T | undefined> => {
    setLoading(true);

    const data: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(result);
        }

        return result;
      })
      .catch((error: Error) => {
        setNotification('error', error.message);
        return undefined;
      })
      .finally(() => setLoading(false));

    return data;
  };

  const authRequest = async (body: unknown): Promise<void> => {
    setLoading(true);

    await ConnectionAPIPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setNotification('success', `Você fez Login!`);
        setAuthorizationToken(result.accessToken);
        setUser(result.user);
        location.href = '/product';

        return result;
      })
      .catch(() => {
        setNotification('error', ERROR_INVALID_PASSWORD);
        return undefined;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    loading,
    authRequest,
    request,
  };
};
