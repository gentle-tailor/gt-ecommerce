import React from 'react';
import * as R from 'ramda';
import { Target } from 'types/animation';
import { opposite } from 'utils/directions';
import slide, { Params } from 'animations/slide';
import TransitionPseudo from 'components/Shared/TransitionPseudo';

const animations = (() => ({
  setup: slide.setup,
  start: (
    node: Target,
    params: Params
  ) => {
    const animation = slide.in(
      node,
      params
    );

    animation.play();
    return animation.finished;
  },
  exit: (
    node: Target,
    {
      direction,
      ...rest
    }: Params
  ) => {
    const animation = slide.out(
      node,
      {
        ...rest,
        direction: opposite(direction),
      }
    );

    animation.play();
    return animation.finished;
  },
}))();

export type SlidePseudoProps = {
  children: React.ReactNode;
  in: boolean;
  directionIn: Params['direction'];
  directionOut: Params['direction'];
  duration?: number;
};

const SlidePseudo: React.SFC<SlidePseudoProps> = ({
  children,
  directionIn,
  directionOut,
  ...rest
}) => (
  <TransitionPseudo
    in={rest.in}
    setup={R.partialRight(animations.setup, [{ direction: directionIn, ...rest }])}
    start={R.partialRight(animations.start, [{ direction: directionIn, ...rest }])}
    exit={R.partialRight(animations.exit, [{ direction: directionOut, ...rest }])}
  >
    {children}
  </TransitionPseudo>
);

export default SlidePseudo;
