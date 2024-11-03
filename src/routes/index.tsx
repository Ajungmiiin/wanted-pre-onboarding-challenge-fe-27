import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import DefaultLayout from './layouts/DefaultLayout';

import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import TodoDetail from './pages/TodoDetail';
import AddTodo from './pages/AddTodo';

export const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    id: 'loot',
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/:id',
            element: <TodoDetail />,
          },
          {
            path: 'add',
            element: <AddTodo />,
          },
        ],
      },
      {
        path: '/auth',
        element: <AuthPage />,
      },
    ],
  },
]);

const Router = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default Router;
