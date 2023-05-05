import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClientProvider, QueryClient } from 'react-query';
import UserProvider from './context/user';
import GlobalStyle from './styles/global';
import Routes from './routes';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
        <GlobalStyle />
      </QueryClientProvider>
    </UserProvider>
  </React.StrictMode>
);
