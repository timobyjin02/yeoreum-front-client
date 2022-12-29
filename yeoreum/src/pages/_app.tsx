import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
