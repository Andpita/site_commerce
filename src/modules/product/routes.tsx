import { RoutesEnum } from '../../shared/enums/route.enum';
import Product from '.';
import { ProductInsert } from './screens/ProductInsert';

export const ProductRoutes = [
  {
    path: RoutesEnum.PRODUCT,
    element: <Product />,
  },
  {
    path: RoutesEnum.PRODUCT_INSERT,
    element: <ProductInsert />,
  },
];
