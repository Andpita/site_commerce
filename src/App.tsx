import type { Router as RemixRouter } from '@remix-run/router';
import { useEffect } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { CategoryRoutes } from './modules/category/routes';
import { FirstScreenRoutes } from './modules/firstScreen/routes';
import { LoginRoutes } from './modules/login/routes';
import { OrderRoutes } from './modules/order/routes';
import { ProductRoutes } from './modules/product/routes';
import { URL_USER } from './shared/constants/urls';
import { MethodsEnum } from './shared/enums/methods.enum';
import { getAuthorizationToken, verifyLoggedIn } from './shared/functions/connections/auth';
import { useNotification } from './shared/hooks/useNotification';
import { useRequest } from './shared/hooks/useRequest';
import { useGlobalReducer } from './store/reducers/globalReducer/useGlobalReducer';

const routes: RouteObject[] = [...LoginRoutes];
const routesLoggedIn: RouteObject[] = [
  ...ProductRoutes,
  ...CategoryRoutes,
  ...FirstScreenRoutes,
  ...OrderRoutes,
].map((route) => ({
  ...route,
  loader: () => verifyLoggedIn(),
}));

const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggedIn]);

function App() {
  const { contextHolder } = useNotification();
  const { setUser } = useGlobalReducer();
  const { request } = useRequest();

  useEffect(() => {
    const token = getAuthorizationToken();

    if (token) {
      request(URL_USER, MethodsEnum.GET, setUser);
    }
  }, []);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
