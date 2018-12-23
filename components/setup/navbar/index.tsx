import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

import Link from 'components/common/Link';

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
    <div>This is the navbar</div>
    <Link href="/">Index</Link>
    <Link href="/app">App</Link>
  </div>
);

export default Navbar;
