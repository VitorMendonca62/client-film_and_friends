import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from 'react-query';

import Routes from './routes';
import UserProvider from './context/user';

import SocketProvider from './context/socket';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SocketProvider>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </UserProvider>
    </SocketProvider>
  </React.StrictMode>,
);
