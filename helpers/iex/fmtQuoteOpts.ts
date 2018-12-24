interface response {
  valid: boolean;
  data: {
    url: string;
    params: {
      symbols?: string;
      types: string;
    };
  };
}

export default function(tickers: string[], types = ['quote']): response {
  return tickers.length > 1
    ? {
        valid: true,
        data: {
          url: '/stock/market/batch',
          params: {
            symbols: tickers.join(','),
            types: types.join(',')
          }
        }
      }
    : {
        valid: true,
        data: {
          url: `/stock/${tickers}/batch`,
          params: {
            types: types.join(',')
          }
        }
      };
}
