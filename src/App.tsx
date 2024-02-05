import type { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { LoginRouter } from './modules/login/routes';
import { useNotification } from './shared/hooks/useNotification';

export const MainPage = [
  {
    path: '/',
    element: <div>Tela Princípal</div>,
    errorElement: <div>404</div>,
  },
];

const router: RemixRouter = createBrowserRouter([...MainPage, ...LoginRouter]);

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
