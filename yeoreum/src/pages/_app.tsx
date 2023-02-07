import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </ThemeProvider>
  );
}
