import React from 'react';
import { withRouter, SingletonRouter } from 'next/router';

import Button from './styles';

type RefreshButtonProps = {
  router: SingletonRouter;
  children?: React.ReactNode;
};

const RefreshButton: React.SFC<RefreshButtonProps> = ({
  router: { replace, pathname, query },
  children
}) => (
  <Button
    type="button"
    onClick={() => {
      replace({
        pathname: pathname,
        query: query
      });
    }}
  >
    {children}
  </Button>
);

RefreshButton.defaultProps = {
  children: 'Refresh'
};

export default withRouter(RefreshButton);
