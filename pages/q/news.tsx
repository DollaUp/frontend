import React from 'react';
import { NextContext } from 'next';
import Head from 'next/head';
import _isUndefined from 'lodash/isUndefined';

import makeStockRequest from 'helpers/iex/makeStockRequest';
import QuoteLayout from 'components/q/QuoteLayout';
import QuoteHeader from 'components/q/Header';

interface NewsProps {
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

export default class News extends React.Component<NewsProps> {
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
    const pageTitle = !_isUndefined(tickers)
      ? tickers.valid || 'Invalid tickers!'
      : 'Search';

    let content = null;
    if (_isUndefined(tickers)) {
      content = null;
      // this should just be the null/search page
    } else if (!_isUndefined(tickers.valid)) {
      switch (tickers.valid.length) {
        case 0: // this should never be the case
          content = null;
        case 1:
          content = null; // SingleQuoteWrapper
        default:
          content = null; // MultipleQuoteWrapper
      }
    } else if (!_isUndefined(tickers.invalid)) {
      if (tickers.invalid.length > 0) {
        content = null; // multiple invalid tickers
      }
    }
    return (
      <div>
        <Head>
          <title>{`${pageTitle} - Dolla Up`}</title>
        </Head>
        <QuoteHeader tickers={tickers} />
      </div>
    );
  }
}
