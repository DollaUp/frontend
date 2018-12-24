import React from 'react';

import Meta from 'components/setup/Meta';
import GlobalStyle from 'components/GlobalStyle';
import Navbar from 'components/setup/Navbar';

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
