import { Home, Login, Signup } from '@courtside/courtside/feature';
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
  {
    path: 'login',
    element: <Login />,
  },
]);
