import format from 'date-fns/format';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import differenceInSeconds from 'date-fns/difference_in_seconds';

export const fmtDateTime = (timestamp: number) =>
  format(timestamp, 'MMM Do, YYYY [at] hh:mm a');

export const fmtDateTimeInChunks = (timestamp: number) => {
  return [fmtDate(timestamp), fmtTime(timestamp)];
};

export const fmtDate = (timestamp: number) => format(timestamp, 'MMM Do, YYYY');

export const fmtTime = (timestamp: number) => format(timestamp, 'hh:mm a');

export const fmtTimeSinceNow = (timestamp: number) =>
  `${distanceInWordsToNow(timestamp)} ago`;

export const fmtLastUpdated = (timestamp: number, inChunks = true) => {
  const now = Date.now();
  const secondsSince = differenceInSeconds(now, timestamp);
  if (secondsSince < 60) return `${secondsSince} seconds ago`;
  if (secondsSince < 60 * 1.5) return `1 minute ago`;
  if (secondsSince < 60 * 5)
    return `${Math.round(secondsSince / 60)} minutes ago`;
  else {
    if (inChunks) return fmtDateTimeInChunks(timestamp);
    return fmtDateTime(timestamp);
  }
};

export default fmtDateTime;
