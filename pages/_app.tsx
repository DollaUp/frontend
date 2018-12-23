import React from 'react';
import App, { Container } from 'next/app';

import { ThemeProvider, useTheme } from 'utils/styled-components';
import Page from 'components/setup/page';
export default class DollaUp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    let pageProps: Object = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps = {
      ...pageProps,
      query: ctx.query
    };

    return { pageProps };
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={useTheme()}>
          {/* TODO: add ApolloProvider */}
          <Page>
            <Component {...pageProps} />
          </Page>
        </ThemeProvider>
      </Container>
    );
  }
}
