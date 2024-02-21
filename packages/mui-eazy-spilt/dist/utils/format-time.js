import format from '../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/format/index.js';
import getTime from '../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getTime/index.js';
import formatDistanceToNow from '../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/formatDistanceToNow/index.js';

function fDate(date, newFormat) {
  const fm = newFormat || 'dd MMM yyyy';
  return date ? format(new Date(date), fm) : '';
}
function fDateTime(date, newFormat) {
  const fm = newFormat || 'dd MMM yyyy p';
  return date ? format(new Date(date), fm) : '';
}
function fTimestamp(date) {
  return date ? getTime(new Date(date)) : '';
}
function fToNow(date) {
  return date ? formatDistanceToNow(new Date(date), {
    addSuffix: true
  }) : '';
}

export { fDate, fDateTime, fTimestamp, fToNow };
