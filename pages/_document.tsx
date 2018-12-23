import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class DollaUpDocument extends Document {
  static getInitialProps = async ({
    renderPage,
    ctx // this will be needed when we integrate graphql
  }: {
    renderPage: Function;
    ctx: Object;
  }) => {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App: React.ComponentClass) => (props: Object) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return {
      ...page,
      styleTags
    };
  };

  render() {
    const { styleTags } = this.props;
    return (
      <html>
        <Head>{styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
