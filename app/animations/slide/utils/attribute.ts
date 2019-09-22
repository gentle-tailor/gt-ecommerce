import * as R from 'ramda';

export const getOffset = R.cond([
  [R.equals('up'), R.always('-100%')],
  [R.equals('down'), R.always('100%')],
  [R.equals('left'), R.always('-100%')],
  [R.equals('right'), R.always('100%')],
]);

export const getProperty = R.cond([
  [R.either(R.equals('up'), R.equals('down')), R.always('translateY')],
  [R.either(R.equals('left'), R.equals('right')), R.always('translateX')],
]);
