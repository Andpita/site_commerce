import { useEffect } from 'react';

import { URL_TICKET_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useTicketReducer } from '../../../store/reducers/ticketReducer/useTicketReducer';

export const useTicketById = (ticketId?: string) => {
  const { ticketById, setTicketById } = useTicketReducer();
  const { request, loading } = useRequest();

  useEffect(() => {
    request(URL_TICKET_ID.replace('{id}', `${ticketId}`), MethodsEnum.GET, setTicketById);
  }, []);

  return {
    ticketById,
    loading,
  };
};
