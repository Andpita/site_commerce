import { RoutesEnum } from '../../shared/enums/route.enum';
import { Order } from './screens/Order';
import { OrderDetail } from './screens/OrderDatail';

export const OrderRoutes = [
  {
    path: RoutesEnum.ORDER,
    element: <Order />,
  },
  {
    path: RoutesEnum.ORDER_ID,
    element: <OrderDetail />,
  },
];
