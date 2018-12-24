import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import NProgress from 'nprogress';

import NavStyles from './styles';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Navbar: React.SFC = () => (
  <NavStyles className="bar">
    <div className="mt-1">
      <span className="mr-1">
        <Link href="/home">
          <a>Home</a>
        </Link>
      </span>
      <span className="mr-1">
        <Link href="/q">
          <a>Quote Page</a>
        </Link>
      </span>
    </div>
    <div className="mt-1">
      {['AAPL', 'AAPL,TWLO', 'TWLO', 'SPOT', 'AKDJSF'].map(ticker => (
        <span key={ticker} className="mr-1">
          <Link
            href={{
              pathname: '/q',
              query: {
                quote: encodeURI(ticker)
              }
            }}
            as={`/q/${ticker}`}
          >
            <a>{ticker}</a>
          </Link>
        </span>
      ))}
    </div>
  </NavStyles>
);

export default Navbar;
