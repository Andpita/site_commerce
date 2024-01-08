import type { Router as RemixRouter } from '@remix-run/router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { LoginRouter } from './modules/login/routes';

export const MainPage = [
  {
    path: '/',
    element: <div>Tela Princípal</div>,
    errorElement: <div>404</div>,
  },
];

const router: RemixRouter = createBrowserRouter([...MainPage, ...LoginRouter]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
