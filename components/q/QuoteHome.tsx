import React from 'react';

import RefreshButton from 'components/RefreshButton';

import { IEXQuoteInterface } from 'helpers/iex/interfaces';
import { fmtLastUpdated } from 'helpers/fmtDateTime';

type QuoteHomeProps = {
  ticker: string;
  invalidTickers: string[];
  data: IEXQuoteInterface;
};

export default class QuoteHome extends React.Component<QuoteHomeProps> {
  render() {
    const { ticker, invalidTickers, data } = this.props;
    return (
      <div>
        <div>{ticker}</div>
        {fmtLastUpdated(data.latestUpdate)}
        <RefreshButton pathformat="pathname/query:quote" />
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
}
