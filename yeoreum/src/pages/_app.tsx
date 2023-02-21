import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { io } from 'socket.io-client';
import { useRemoveBoardPageData } from '../hooks/useBoardPageData';
import { getToken } from '../utils/user';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const socket = io('http://54.180.208.119:4000/chat', {
  auth: {
    token: getToken(),
  },
});

export default function App({ Component, pageProps }: AppProps) {
  useRemoveBoardPageData();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
