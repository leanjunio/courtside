import { AppState, Auth0ProviderOptions } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

export function Auth0Provider({ children, ...props }: Auth0ProviderOptions) {
  const navigate = useNavigate();

  const onRedirect = (appState?: AppState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  return (
    <Auth0Provider onRedirectCallback={onRedirect} {...props}>
      {children}
    </Auth0Provider>
  );
}
