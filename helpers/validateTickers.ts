import _ from 'lodash';
import _indexOf from 'lodash/indexOf';
import _isUndefined from 'lodash/isUndefined';
import _isEmpty from 'lodash/isEmpty';
import _isString from 'lodash/isString';
import _keys from 'lodash/keys';

type response = {
  valid: boolean;
  data: {
    invalid?: string[];
    valid?: string[];
  };
};

type dataType =
  | string
  | {
      quote: {
        symbol: string;
        [name: string]: string | number;
      };
      [name: string]: any;
    };

const isValid: Function = (arg: string[]): boolean =>
  !(_isUndefined(arg) || _isEmpty(arg));

export default function(
  resData: dataType,
  tickersFromQuery: string[]
): response {
  if (!isValid(resData) || !isValid(tickersFromQuery) || _isString(resData)) {
    return {
      valid: false,
      data: {}
    };
  }
  const tickersFromResponse =
    tickersFromQuery.length > 1 ? _keys(resData) : [resData.quote.symbol];
  const data = _.chain(tickersFromQuery)
    .groupBy(t => (_indexOf(tickersFromResponse, t) < 0 ? 'invalid' : 'valid'))
    .value();
  return {
    valid: true,
    data
  };
}
