import { useCurrentUser } from '@courtside/courtside/feature';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  component: React.FunctionComponent;
};

export function ProtectedRoute({
  component: Component,
}: ProtectedRouteProps): JSX.Element {
  const isLoggedIn = useCurrentUser((state) => state.isLoggedIn);

  if (isLoggedIn) {
    return <Component />;
  }

  return <Navigate to="/login" />;
}
