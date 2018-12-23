import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';

import withApollo from 'utils/withApollo';
import { ThemeProvider, useTheme } from 'utils/styled-components';
import Page from 'components/setup/page';
class DollaUpApp extends App {
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
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <ThemeProvider theme={useTheme()}>
          <ApolloProvider client={apollo}>
            <Page>
              <Component {...pageProps} />
            </Page>
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withApollo(DollaUpApp);
