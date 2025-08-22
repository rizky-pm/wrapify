import { createBrowserRouter } from 'react-router-dom';

import MainPage from '@/pages/Main';
import CallbackPage from '@/pages/Callback';
import DashboardPage from '@/pages/Dashboard';
import AuthenticatedRoot from '@/components/AuthenticatedRoot';
import UnauthenticatedRoot from '@/components/UnauthenticatedRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UnauthenticatedRoot />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/callback',
        element: <CallbackPage />,
      },
    ],
  },
  {
    path: '/callback',
    element: <CallbackPage />,
  },
  {
    path: '/dashboard',
    element: <AuthenticatedRoot />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
]);

export default router;
