import { RoutesEnum } from '../../shared/enums/route.enum';
import { Category } from './screens/Category';
import { CategoryInsert } from './screens/CategoryInsert';

export const CategoryRoutes = [
  {
    path: RoutesEnum.CATEGORY,
    element: <Category />,
  },
  {
    path: RoutesEnum.CATEGORY_INSERT,
    element: <CategoryInsert />,
  },
];
