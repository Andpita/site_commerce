import axios from 'axios';
import { useState } from 'react';

export const useRequest = () => {
  const [loading, setLoading] = useState(false);

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

  const postRequest = async (url: string, body: unknown) => {
    setLoading(true);

    const result = await axios({
      method: 'post',
      url: url,
      data: body,
    })
      .then((result) => {
        alert(`Bem vindo ${result.data.user.name}`);
        return result.data;
      })
      .catch(() => {
        alert('Deu erro');
      })
      .finally(() => setLoading(false));

    return result;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
