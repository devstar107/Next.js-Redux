import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';

import { wrapper } from '../store/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
};

export default wrapper.withRedux(MyApp);
