import React from 'react';
import App, { Container } from 'next/app';

import { ThemeProvider, defaultTheme } from 'utils/styled-components';

export default class DollaUp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    let pageProps: Object = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.query = ctx.query;

    return { pageProps };
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={defaultTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
