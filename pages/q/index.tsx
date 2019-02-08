import React from 'react';
import { NextContext } from 'next';
import Head from 'next/head';
import _isUndefined from 'lodash/isUndefined';

import makeStockRequest from 'helpers/iex/makeStockRequest';
import QuoteSearch from 'components/common/inputs/QuoteSearch';
import QuoteHome from 'components/q/QuoteHome';

import { IEXQuoteInterface } from 'helpers/iex/interfaces';

interface IndexProps {
  readonly query: Object;
  readonly tickers?: {
    valid?: string[];
    invalid?: string[];
  };
  readonly data: {
    quote: IEXQuoteInterface;
  };
}

/**
 * TODO:
 * * without a query, this should redirect to a "lookup" page (like Yahoo Finance)
 * or redirect back to the `/home` page
 * * with a query, the query item (ticker) should be run through a validator
 *   - depending on number of tickers specified (comma-separated), render the page accordingly
 */

const requestKey = 'quote';

export default class Index extends React.Component<IndexProps> {
  static getInitialProps = async ({ query }: NextContext) => {
    const requestProps = await makeStockRequest({
      query,
      opts: {
        types: [requestKey]
      }
    });
    return requestProps;
  };

  render() {
    const { tickers, data } = this.props;
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
          break;
        case 1:
          content = (
            <QuoteHome
              ticker={tickers.valid[0]}
              invalidTickers={tickers.invalid || []}
              data={data[requestKey]}
            />
          );
          break;
        default:
          content = null; // MultipleQuoteWrapper
          break;
      }
    } else if (!_isUndefined(tickers.invalid)) {
      if (tickers.invalid.length > 0) {
        content = null; // multiple invalid tickers
      }
    }
    return (
      <div>
        <div className="my-3">
          <QuoteSearch />
        </div>
        <Head>
          <title>{`${pageTitle} - Dolla Up`}</title>
        </Head>
        {content}
      </div>
    );
  }
}
