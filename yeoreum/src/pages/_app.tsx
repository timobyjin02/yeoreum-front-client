import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRemoveBoardPageData } from '../hooks/useBoardPageData';
import AppLayout from '../components/common/AppLayout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  useRemoveBoardPageData();

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
