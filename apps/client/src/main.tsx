import { Auth0Provider } from '@auth0/auth0-react';
import { getEnvironmentVariables } from '@courtside/shared/util-environment';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <Auth0Provider
      clientId={getEnvironmentVariables('NX_AUTH0_CLIENT_ID')}
      domain={getEnvironmentVariables('NX_AUTH0_DOMAIN')}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Auth0Provider>
  </StrictMode>
);
