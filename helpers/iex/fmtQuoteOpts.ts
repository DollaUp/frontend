interface response {
  url: string;
  params: {
    symbols?: string;
    types: string;
  };
}

export default function(
  tickers: string[],
  types = ['quote']
): [boolean, response] {
  return tickers.length > 1
    ? [
        true,
        {
          url: '/stock/market/batch',
          params: {
            symbols: tickers.join(','),
            types: types.join(',')
          }
        }
      ]
    : [
        true,
        {
          url: `/stock/${tickers}/batch`,
          params: {
            types: types.join(',')
          }
        }
      ];
}
