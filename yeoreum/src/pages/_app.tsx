import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { io } from 'socket.io-client';
import { getToken } from '../utils/user';
import AppLayout from '../components/common/AppLayout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const socket = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}/chat`, {
  auth: {
    token: getToken(),
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
