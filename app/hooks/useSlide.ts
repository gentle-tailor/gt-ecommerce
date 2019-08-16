import { useState } from 'react';
import * as R from 'ramda';

type HookPayload = [
  number,
  (index: number) => void
];

type Range = {
  min: number;
  max: number;
}

const normalize = (
  {
    min,
    max
  }: Range
): (i: number) => number => (
  R.cond([
    [R.lt(max), R.always(min)],
    [R.gt(min), R.always(max)],
    [R.T, R.identity]
  ])
);

const useSlide = (
  range: {
    min: number;
    max: number;
  }
): HookPayload => {
  const [
    index,
    setIndex,
  ] = useState(range.min);

  return [
    index,
    R.compose(setIndex, normalize(range)),
  ]
};

export default useSlide;
