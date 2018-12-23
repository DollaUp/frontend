import Head from 'next/head';

const Meta = () => (
  <Head>
    <title>Dolla Up</title>
    <meta charSet="UTF-8" />
    <meta
      key="description"
      name="description"
      content="A web application to track your investments."
    />
    <meta
      key="keywords"
      name="keywords"
      content="finance,finances,investing,stocks"
    />
    <meta key="author" name="author" content="Rahul Rangnekar" />
    <meta
      key="viewport"
      name="viewport"
      content="width=device-width,initial-scale=1.0"
    />
    {/* TODO: add favicon */}
    <link rel="stylesheet" type="text/css" href="/static/nprogress.scss" />
  </Head>
);

export default Meta;
