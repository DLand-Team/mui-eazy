import numeral from '../node_modules/.pnpm/numeral@2.0.6/node_modules/numeral/numeral.js';

function fNumber(number) {
  return numeral(number).format();
}
function fCurrency(number) {
  const format = number ? numeral(number).format('$0,0.00') : '';
  return result(format, '.00');
}
function fCurrencyWithout(number) {
  const format = number ? numeral(number).format('0,0.00') : '';
  return result(format, '.00');
}
function fPercent(number) {
  const format = number ? numeral(Number(number) / 100).format('0.0%') : '';
  return result(format, '.0');
}
function fShortenNumber(number) {
  const format = number ? numeral(number).format('0.00a') : '';
  return result(format, '.00');
}
function fData(number) {
  const format = number ? numeral(number).format('0.0 b') : '';
  return result(format, '.0');
}
function result(format, key = '.00') {
  const isInteger = format.includes(key);
  return isInteger ? format.replace(key, '') : format;
}

export { fCurrency, fCurrencyWithout, fData, fNumber, fPercent, fShortenNumber };
