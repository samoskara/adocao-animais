import { createBrowserRouter, Navigate } from 'react-router';
import { Home } from './pages/Home';
import { PetProfile } from './pages/PetProfile';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/pet/:id',
    Component: PetProfile,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
