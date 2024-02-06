import type { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { FirstScreenRoutes } from './modules/firstScreen/routes';
import { LoginRoutes } from './modules/login/routes';
import { ProductRoutes } from './modules/product/routes';
import { useNotification } from './shared/hooks/useNotification';

const router: RemixRouter = createBrowserRouter([
  ...FirstScreenRoutes,
  ...LoginRoutes,
  ...ProductRoutes,
]);

function App() {
  const { contextHolder } = useNotification();
  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
