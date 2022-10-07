import { Signup } from '@courtside/courtside/feature/signup';
import { createBrowserRouter } from 'react-router-dom';
import { Home, Register } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'register',
    element: <Signup />,
  },
]);
