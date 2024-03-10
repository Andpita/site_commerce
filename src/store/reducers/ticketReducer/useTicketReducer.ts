import { useDispatch } from 'react-redux';

import { TicketType } from '../../../shared/types/TicketType';
import { useAppSelector } from '../../hooks';
import { setTicketByIdAction, setTicketsAction } from '.';

export const useTicketReducer = () => {
  const dispatch = useDispatch();

  const { tickets, ticketById } = useAppSelector((state) => state.ticketReducer);

  const setTickets = (ticket: TicketType[]) => {
    dispatch(setTicketsAction(ticket));
  };

  const setTicketById = (ticket: TicketType) => {
    dispatch(setTicketByIdAction(ticket));
  };

  return {
    ticketById,
    tickets,
    setTicketById,
    setTickets,
  };
};
