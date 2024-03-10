import { useEffect } from 'react';

import { URL_TICKET } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useTicketReducer } from '../../../store/reducers/ticketReducer/useTicketReducer';

export const useTickets = () => {
  const { tickets, setTickets } = useTicketReducer();
  const { request } = useRequest();

  useEffect(() => {
    if (!tickets || tickets.length === 0) {
      request(URL_TICKET, MethodsEnum.GET, setTickets);
    }
  }, []);

  return {
    tickets,
  };
};
