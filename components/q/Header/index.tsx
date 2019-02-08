import React from 'react';
import { withRouter } from 'next/router';

import _isUndefined from 'lodash/isUndefined';
import _isEmpty from 'lodash/isEmpty';

import QuoteSearch from 'components/common/inputs/QuoteSearch';
import HeaderStyles from './styles';

class Header extends React.Component {
  render() {
    const { tickers } = this.props;
    const pageTitle =
      !_isUndefined(tickers) && !_isEmpty(tickers.valid)
        ? tickers.valid.join(', ')
        : 'Failed';
    return (
      <HeaderStyles>
        <div className="flex-row content-between">
          <div className="flex-col">
            <div>Stock</div>
            <div>{pageTitle}</div>
          </div>
          <div>
            <QuoteSearch />
          </div>
        </div>
      </HeaderStyles>
    );
  }
}

export default withRouter(Header);
