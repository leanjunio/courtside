import { Home } from '@courtside/courtside/feature/home';
import { Signup } from '@courtside/courtside/feature/signup';
import { createBrowserRouter } from 'react-router-dom';

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
