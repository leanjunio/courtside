import { useAuth0 } from '@auth0/auth0-react';
import { useSnackbar } from 'notistack';
import { LoadingSpinner } from '../../loading';
import { Sidebar } from '../../navigation';

type PageWrapperProps = {
  children: React.ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  const { isAuthenticated, user, error } = useAuth0();
  const { enqueueSnackbar } = useSnackbar();
  console.log({ isAuthenticated, user });

  if (error) {
    enqueueSnackbar('Error: Cannot load authenticated user');
  }

  return (
    <div className="h-screen bg-gray-50">
      {!isAuthenticated || !user ? (
        <LoadingSpinner />
      ) : (
        <div className="flex">
          <Sidebar user={user} />
          <div className="px-3 py-7">{children}</div>
        </div>
      )}
    </div>
  );
}
