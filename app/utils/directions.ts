import * as R from 'ramda';

export const opposite = R.cond([
  [R.equals('up'), R.always('down')],
  [R.equals('down'), R.always('up')],
  [R.equals('left'), R.always('right')],
  [R.equals('right'), R.always('left')],
]);
