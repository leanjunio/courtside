import { Sidebar } from '@courtside/courtside/navigation';
import { useCurrentUser } from '@courtside/state';
import { LoadingSpinner } from '../../loading';

type PageWrapperProps = {
  title: string;
  children: React.ReactNode;
};

export function PageWrapper({ title, children }: PageWrapperProps) {
  const { isLoggedIn, user } = useCurrentUser((s) => ({
    isLoggedIn: s.isLoggedIn,
    user: s.user,
  }));

  return (
    <div className="h-screen bg-gray-50">
      {!isLoggedIn ? (
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
