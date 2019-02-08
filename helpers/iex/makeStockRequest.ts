import _keys from 'lodash/keys';

import isQuoteValid from 'helpers/isQuoteValid';
import validateTickers from 'helpers/validateTickers';
import fmtQuoteOpts from 'helpers/iex/fmtQuoteOpts';
import iexRequest from 'utils/request/iex';

type QueryType = {
  [quote: string]: string | string[] | undefined;
};

type OptsParamType = {
  types?: string[];
  errors?: {
    [statusCode: number]: {
      status: number;
      statusText?: string;
      hide?: boolean;
      component?: React.ReactNode;
      info?: {
        title: string;
        description?: string;
        redirect?: {
          text: string;
          href:
            | string
            | {
                pathname: string;
                query?: {
                  [q: string]: string | string[] | undefined;
                };
              };
        };
      };
    };
  };
};

// TODO: create a way to pass in custom errors

export default async function({
  query,
  opts = {}
}: {
  query: QueryType;
  opts?: OptsParamType;
}) {
  const queryTickers = isQuoteValid(query);
  if (!queryTickers.valid) return {};
  const iexOpts = fmtQuoteOpts(queryTickers.data, opts.types);
  if (!iexOpts.valid) return {};
  const res = await iexRequest(iexOpts.data);
  const tickers = validateTickers(res.data, queryTickers.data);
  switch (res.status) {
    case 200:
      return {
        data: res.data,
        tickers: tickers.valid ? tickers.data : {}
      };
    case 404:
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
        tickers: tickers.valid ? tickers.data : {}
      };
    default:
      return {
        error: {
          status: res.status,
          statusText: res.statusText,
          info: {
            title: 'Something went wrong...',
            redirect: {
              text: 'Go Back!',
              href: '/q'
            }
          }
        },
        tickers: tickers.valid ? tickers.data : {}
      };
  }
}
