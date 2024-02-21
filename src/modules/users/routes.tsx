import { RoutesEnum } from '../../shared/enums/route.enum';
import { Users } from './screens/Users';

export const UserRoutes = [
  {
    path: RoutesEnum.USER_ALL,
    element: <Users />,
  },
];
