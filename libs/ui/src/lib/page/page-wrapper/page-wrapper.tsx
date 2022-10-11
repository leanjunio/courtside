import { useAuth0 } from '@auth0/auth0-react';
import { useSnackbar } from 'notistack';
import { LoadingSpinner } from '../../loading';
import { Sidebar } from '../../navigation';

type PageWrapperProps = {
  title: string;
  children: React.ReactNode;
};

export function PageWrapper({ title, children }: PageWrapperProps) {
  const { isAuthenticated, user, error } = useAuth0();
  const { enqueueSnackbar } = useSnackbar();

  if (error) {
    enqueueSnackbar('Error: Cannot load authenticated user');
  }

  return (
    <div className="h-screen bg-gray-50">
      {!isAuthenticated || !user ? (
        <LoadingSpinner />
      ) : (
        <div className="flex w-full">
          <Sidebar user={user} />
          <div className="px-3 py-7 grow">
            <h1>{title}</h1>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
