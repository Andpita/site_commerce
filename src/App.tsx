import type { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { FirstScreenRoutes } from './modules/firstScreen/routes';
import { LoginRoutes } from './modules/login/routes';
import { ProductRoutes } from './modules/product/routes';
import { verifyLoggedIn } from './shared/functions/connections/auth';
import { useGlobalContext } from './shared/hooks/UseGlobalContext';
import { useNotification } from './shared/hooks/useNotification';

function App() {
  const { contextHolder } = useNotification();
  const { user, setUser } = useGlobalContext();

  const routes: RouteObject[] = [...LoginRoutes];
  const routesLoggedIn: RouteObject[] = [...ProductRoutes, ...FirstScreenRoutes].map((route) => ({
    ...route,
    loader: () => verifyLoggedIn(setUser, user),
  }));

  const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggedIn]);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
