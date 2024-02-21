import { useEffect } from 'react';

import { URL_ORDER_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useOrderReducer } from '../../../store/reducers/orderReducer/useOrderReducer';

export const useOrderDatails = (orderId?: string) => {
  const { orderById, setOrderById } = useOrderReducer();
  const { request, loading } = useRequest();

  useEffect(() => {
    request(URL_ORDER_ID.replace('{orderId}', `${orderId}`), MethodsEnum.GET, setOrderById);
  }, []);

  return {
    orderById,
    loading,
  };
};
