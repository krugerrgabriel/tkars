import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import NextNProgress from 'nextjs-progressbar';

import * as gtag from '../lib/gtag';
import Analytics from '../components/Analytics';

import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

import 'bootstrap/dist/css/bootstrap.css';

// @ts-ignore
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <NextNProgress color="#971915" />
      <Component {...pageProps} />
      <GlobalStyle />
      <Analytics />
    </ThemeProvider>
  );
};

export default MyApp;
