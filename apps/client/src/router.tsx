import {
  Dashboard,
  Details,
  Home,
  ListTeams,
  Login,
  Signup,
} from '@courtside/courtside/feature';
import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './protected';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'register',
    element: <Signup />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'dashboard',
    element: <ProtectedRoute component={Dashboard} />,
  },
  {
    path: 'teams',
    element: <ProtectedRoute component={ListTeams} />,
  },
  {
    path: 'details',
    element: <ProtectedRoute component={Details} />,
  },
]);
