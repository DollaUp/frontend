import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import NProgress from 'nprogress';

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
  <div className="bar">
    <div className="mt-2">This is the navbar</div>
    <div className="mt-2">
      <span className="mr-1">
        <Link href="/">
          <a>Index</a>
        </Link>
      </span>
      <span className="mr-1">
        <Link href="/q">
          <a>QuotePage</a>
        </Link>
      </span>
    </div>
    <div className="mt-2">
      {['AAPL', 'AAPL,TWLO', 'TWLO', 'SPOT'].map(ticker => (
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
  </div>
);

export default Navbar;
