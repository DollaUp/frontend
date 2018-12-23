import React from 'react';

import Meta from 'components/setup/Meta';
import GlobalStyle from 'components/global_style';
import Navbar from 'components/setup/navbar';

type PageProps = {
  children: React.ReactNode;
};

const Page: React.SFC<PageProps> = ({ children }) => (
  <div>
    <Meta />
    <GlobalStyle />
    <Navbar />
    {children}
  </div>
);

export default Page;
