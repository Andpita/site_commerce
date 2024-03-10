import { RoutesEnum } from '../../shared/enums/route.enum';
import Ticket from '.';
import { TicketById } from './screens/TicketById';

export const TicketRoutes = [
  {
    path: RoutesEnum.USER_TICKET,
    element: <Ticket />,
  },
  {
    path: RoutesEnum.USER_TICKET_ID,
    element: <TicketById />,
  },
];
