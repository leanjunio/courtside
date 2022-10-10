import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import { Sidebar } from '../../navigation';

type PageWrapperProps = {
  children: React.ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  const { isAuthenticated, user } = useAuth0();

  if (!isAuthenticated || !user) {
    return <Navigate replace to="/login" />;
  }

  return (
    <div className="flex">
      <Sidebar user={user} />
      <div className="px-3 py-7">{children}</div>
    </div>
  );
}
