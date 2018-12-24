import React from 'react';
import { NextContext } from 'next';
import Head from 'next/head';

import makeStockRequest from 'helpers/iex/makeStockRequest';
import RefreshButton from 'components/RefreshButton';
import QuoteSearch from 'components/common/inputs/QuoteSearch';
interface IndexProps {
  readonly query: Object;
  readonly tickers?: {
    valid?: string[];
    invalid?: string[];
  };
}

/**
 * TODO:
 * * without a query, this should redirect to a "lookup" page (like Yahoo Finance)
 * or redirect back to the `/home` page
 * * with a query, the query item (ticker) should be run through a validator
 *   - depending on number of tickers specified (comma-separated), render the page accordingly
 */

export default class Index extends React.Component<IndexProps> {
  static getInitialProps = async ({ query }: NextContext) => {
    const requestProps = await makeStockRequest({
      query,
      opts: {
        types: ['news']
      }
    });
    return requestProps;
  };

  render() {
    const { tickers } = this.props;
    console.log({ tickers });
    return (
      <div>
        <Head>
          <title>{`${tickers.valid || 'Search'} - Dolla Up`}</title>
        </Head>
        <div className="my-3">
          <QuoteSearch />
        </div>
        <RefreshButton />
        <h2 className="page-header">Quote Index!</h2>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}
