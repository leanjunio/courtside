import { useAuth0 } from '@auth0/auth0-react';
import { Sidebar } from '../../navigation';

type PageWrapperProps = {
  children: React.ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  const { isAuthenticated, user } = useAuth0();
  console.log({ isAuthenticated, user });

  return (
    <div className="flex">
      {user && <Sidebar user={user} />}
      <div className="px-3 py-7">{children}</div>
    </div>
  );
}
