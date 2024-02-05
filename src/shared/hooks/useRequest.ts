import axios from 'axios';
import { useState } from 'react';

import { ConnectionAPIPost } from '../functions/connections/connectAPI';
import { useGlobalContext } from './useGlobalContext';

export const useRequest = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();

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

  const postRequest = async <T>(url: string, body: unknown): Promise<T | undefined> => {
    setLoading(true);

    const result = await ConnectionAPIPost<T>(url, body)
      .then((result) => {
        setNotification('success', `Você fez Login!`);
        return result;
      })
      .catch(() => {
        setNotification('error', 'Usuário ou Senha inválidos');
        return undefined;
      })
      .finally(() => {
        setLoading(false);
      });

    return result;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
