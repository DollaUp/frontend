import React from 'react';
import { withRouter, SingletonRouter } from 'next/router';
import _startsWith from 'lodash/startsWith';
import _trimStart from 'lodash/trimStart';
import _split from 'lodash/split';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import _isUndefined from 'lodash/isUndefined';
import _forEach from 'lodash/forEach';

import Button from './styles';

type RefreshButtonProps = {
  router: SingletonRouter;
  children?: React.ReactNode;
  pathformat?: string;
};

const fmtAs = (
  pathformat: string | undefined,
  pathname: string,
  query: Record<string, string | string[] | undefined> | undefined
): string | undefined => {
  if (
    _isUndefined(pathformat) ||
    _isEmpty(pathformat) ||
    _isUndefined(query) ||
    _isEmpty(query)
  ) {
    return undefined;
  }
  let res = '';
  _forEach(_split(pathformat, '/'), pc => {
    if (pc === 'pathname') res += pathname + '/';
    else if (_startsWith(pc, 'query:')) {
      const queries = _split(pc, 'query:');
      _forEach(queries, q => {
        if (!_isEmpty(q) || !_isUndefined(query[q])) {
          res += query[q];
        }
      });
    } else if (!_isEmpty(pc)) res += pc;
  });
  return res || undefined;
};

const RefreshButton: React.SFC<RefreshButtonProps> = ({
  router: { replace, pathname, query },
  pathformat,
  children
}) => (
  <Button
    type="button"
    onClick={() => {
      replace(
        {
          pathname: pathname,
          query: query
        },
        fmtAs(pathformat, pathname, query)
      );
    }}
  >
    {children}
  </Button>
);

RefreshButton.defaultProps = {
  children: 'Refresh'
};

export default withRouter(RefreshButton);
