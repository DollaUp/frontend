import React from 'react';

import RefreshButton from 'components/RefreshButton';
import ActiveLink from 'components/common/ActiveLink';
/**
 * TODO:
 * - header --> pass down tickers as prop for this
 * - navigation bar --> pass down active route for this
 */

type QuoteWrapperProps = {
  children: React.ReactNode;
  tickers?: {
    valid?: string[] | undefined;
    invalid?: string[] | undefined;
  };
};

export default class QuoteWrapper extends React.Component<QuoteWrapperProps> {
  render() {
    // const { children, tickers } = this.props;
    return (
      <div>
        {/* <RefreshButton pathformat={`pathname/query:quote`} /> */}
        {/* <h2 className="page-header">
          {(tickers && tickers.valid) || 'Invalid tickers'}
        </h2> */}
        {/* <div className="mt-2">{children}</div> */}
        {/* <ActiveLink href={`/q/${tickers.valid.join(',')}/news`}>
          Home
        </ActiveLink> */}
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}
