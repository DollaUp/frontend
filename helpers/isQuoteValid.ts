import _split from 'lodash/split';
import _trim from 'lodash/trim';
import _isEmpty from 'lodash/isEmpty';
import _isUndefined from 'lodash/isUndefined';
import _isString from 'lodash/isString';
import _toUpper from 'lodash/toUpper';

import _ from 'lodash';

interface QueryInterface {
  [quote: string]: string | string[] | undefined;
}

interface response {
  valid: boolean;
  data: string[];
}

export default function(query: QueryInterface, queryKey = 'quote'): response {
  if (_isEmpty(query)) return { valid: false, data: [] };
  const quote = query[queryKey];
  if (_isUndefined(quote) || _isEmpty(quote) || !_isString(quote)) {
    return {
      data: [],
      valid: false
    };
  }
  const tickers = _.chain(_split(quote, ','))
    .filter(x => !_isEmpty(x))
    .map(x => _toUpper(_trim(x, ' !@#$%^&*()-_+=[];:<>/?."')))
    .uniq()
    .value();
  return {
    valid: true,
    data: tickers
  };
}
