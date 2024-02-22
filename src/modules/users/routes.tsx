import { RoutesEnum } from '../../shared/enums/route.enum';
import { UserAdmInsert } from './screens/UserAdmInsert';
import { Users } from './screens/Users';

export const UserRoutes = [
  {
    path: RoutesEnum.USER_ALL,
    element: <Users />,
  },
  {
    path: RoutesEnum.USER_INSERT_ADM,
    element: <UserAdmInsert />,
  },
];
