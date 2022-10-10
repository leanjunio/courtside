import {
  withAuthenticationRequired,
  WithAuthenticationRequiredOptions,
} from '@auth0/auth0-react';
import { ComponentType } from 'react';

type ProtectedRouteProps = WithAuthenticationRequiredOptions & {
  component: ComponentType;
};

export function ProtectedRoute({ component, ...props }: ProtectedRouteProps) {
  const Component = withAuthenticationRequired(component, props);
  return <Component />;
}
