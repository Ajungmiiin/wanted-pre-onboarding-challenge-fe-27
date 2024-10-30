import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';

import AuthPage from './pages/AuthPage';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/auth',
        element: <AuthPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
