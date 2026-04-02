import { createBrowserRouter } from 'react-router';
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
]);
