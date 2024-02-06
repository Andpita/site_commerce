import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthType } from '../../modules/login/types/AuthType';
import { ERROR_INVALID_PASSWORD } from '../constants/errorStatus';
import { URL_AUTH } from '../constants/urls';
import { RoutesEnum } from '../enums/route.enum';
import { setAuthorizationToken } from '../functions/connections/auth';
import { ConnectionAPIPost } from '../functions/connections/connectAPI';
import { useGlobalContext } from './useGlobalContext';

export const useRequest = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();
  const navigate = useNavigate();

  const getRequest = async (url: string) => {
    setLoading(true);

    return await axios({
      method: 'get',
      url: url,
    })
      .then((result) => {
        alert(result.data);
      })
      .catch(() => {
        alert('Deu erro');
      })
      .finally(() => setLoading(false));
  };

  const postRequest = async <T>(url: string, body: unknown): Promise<void> => {
    setLoading(true);

    await ConnectionAPIPost<T>(url, body)
      .then((result) => {
        setNotification('success', `Você fez Login!`);
        navigate(RoutesEnum.PRODUCT);

        return result;
      })
      .catch(() => {
        setNotification('error', 'Usuário ou Senha inválidos');
        return undefined;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const authRequest = async (body: unknown): Promise<void> => {
    setLoading(true);

    await ConnectionAPIPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setNotification('success', `Você fez Login!`);
        setAuthorizationToken(result.accessToken);
        navigate(RoutesEnum.PRODUCT);

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
    getRequest,
    postRequest,
  };
};
