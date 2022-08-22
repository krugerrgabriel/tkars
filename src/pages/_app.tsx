import React, { useState } from 'react';
import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

import 'bootstrap/dist/css/bootstrap.css';
// @ts-ignore
const MyApp: React.FC<AppProps> = ({ Component, pageProps, carros }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
