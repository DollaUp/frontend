import React from 'react';
import { NextContext } from 'next';
import Head from 'next/head';
import iexRequest from 'utils/request/iex';

import isQuoteValid from 'helpers/isQuoteValid';
import fmtQuoteOpts from 'helpers/iex/fmtQuoteOpts';

interface IndexProps {
  readonly query: Object;
  readonly tickers?: string[] | undefined;
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
    const tickers = isQuoteValid(query);
    if (!tickers.valid) return {};
    const iexOpts = fmtQuoteOpts(tickers.data, ['ohlc']);
    if (!iexOpts.valid) return {};
    const res = await iexRequest(iexOpts.data);
    if (res.status !== 200) {
      return {
        error: {
          status: res.status,
          statusText: res.statusText,
          info: {
            title: 'I FAILED HERE',
            description: 'this stock does not exist',
            redirect: {
              text: 'You Dummy!',
              href: '/q'
            }
          }
        },
        tickers: tickers.data
      };
    }
    return {
      data: res.data,
      tickers: tickers.data
    };
  };

  render() {
    const { tickers } = this.props;
    return (
      <div>
        <Head>
          <title>{`${tickers || 'Search'} - Dolla Up`}</title>
        </Head>
        <h2 className="page-header">Quote Index!</h2>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}
