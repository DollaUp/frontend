import React from 'react';
import App, { Container, AppComponentContext } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import _isUndefined from 'lodash/isUndefined';
import _isEmpty from 'lodash/isEmpty';

import withApollo from 'utils/withApollo';
import { ThemeProvider, useTheme } from 'utils/styled-components';
import Page from 'components/setup/Page';
import ErrorWrapper from 'components/setup/Error';

class DollaUpApp extends App {
  static getInitialProps = async ({ Component, ctx }: AppComponentContext) => {
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
              <ErrorWrapper error={pageProps.error}>
                <Component {...pageProps} />
              </ErrorWrapper>
            </Page>
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withApollo(DollaUpApp);
