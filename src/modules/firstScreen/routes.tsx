import FirstScreen from '.';
import { Page404 } from './screens/PageNotFound';

export const FirstScreenRoutes = [
  {
    path: '/',
    element: <FirstScreen />,
    errorElement: <Page404 />,
  },
];
