import React from 'react';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

import 'bootstrap/dist/css/bootstrap.css';
// @ts-ignore
const MyApp: React.FC<AppProps> = ({ Component, pageProps, carros }) => {
  return (
    <ThemeProvider theme={theme}>
      <NextNProgress color="#971915" />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
