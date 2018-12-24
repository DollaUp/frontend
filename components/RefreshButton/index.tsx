import React from 'react';
import { withRouter, SingletonRouter } from 'next/router';

type RefreshButtonProps = {
  router: SingletonRouter;
  children?: React.ReactNode;
};

const RefreshButton: React.SFC<RefreshButtonProps> = ({
  router: { replace, pathname, query },
  children
}) => (
  <button
    onClick={() => {
      replace({
        pathname: pathname,
        query: query
      });
    }}
  >
    {children}
  </button>
);

RefreshButton.defaultProps = {
  children: 'CLICK ME'
};

export default withRouter(RefreshButton);
