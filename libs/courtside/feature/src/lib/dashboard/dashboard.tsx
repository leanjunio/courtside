import { useAuth0 } from '@auth0/auth0-react';
import { Sidebar } from '@courtside/ui';
import React from 'react';

export function Dashboard() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="flex">
      {isAuthenticated && user !== undefined && <Sidebar user={user} />}
      My Content
    </div>
  );
}
