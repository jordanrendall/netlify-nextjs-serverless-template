import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Page from '../components/Page';
const theme = {
  colors: {
    primary: '#0070f3',
  },
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    );
  }
}

export default MyApp;
