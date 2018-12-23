import React from 'react';
import Router from 'next/router';
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
  <div>
    <div>This is the navbar</div>
  </div>
);

export default Navbar;
