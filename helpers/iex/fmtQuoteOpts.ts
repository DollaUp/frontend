import _uniq from 'lodash/uniq';

type ResponseType = {
  valid: boolean;
  data: {
    url: string;
    params: {
      symbols?: string;
      types: string;
    };
  };
};

export default function(tickers: string[], types = ['quote']): ResponseType {
  const allTypes = _uniq([...types, 'quote']);
  return tickers.length > 1
    ? {
        valid: true,
        data: {
          url: '/stock/market/batch',
          params: {
            symbols: tickers.join(','),
            types: allTypes.join(',')
          }
        }
      }
    : {
        valid: true,
        data: {
          url: `/stock/${tickers}/batch`,
          params: {
            types: allTypes.join(',')
          }
        }
      };
}
