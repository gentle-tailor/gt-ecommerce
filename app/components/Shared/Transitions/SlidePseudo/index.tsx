import React from 'react';
import * as R from 'ramda';
import { Target } from 'types/animation';
import { opposite } from 'utils/directions';
import slide, { Params } from 'animations/slide';
import TransitionPseudo, { TransitionPseudoProps } from 'components/Shared/TransitionPseudo';

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

export type SlidePseudoProps = (
  Pick<TransitionPseudoProps, 'status' | 'onMounted' | 'onUnmounted'> &
  {
    children: React.ReactNode;
    directionIn: Params['direction'];
    directionOut: Params['direction'];
    duration?: number;
    delay?: number;
    stagger?: number;
  }
);

const SlidePseudo: React.SFC<SlidePseudoProps> = ({
  children,
  directionIn,
  directionOut,
  duration,
  delay,
  stagger,
  ...rest
}) => (
  <TransitionPseudo
    {...rest}
    setup={R.partialRight(animations.setup, [{ direction: directionIn, duration, delay, stagger }])}
    start={R.partialRight(animations.start, [{ direction: directionIn, duration, delay, stagger }])}
    exit={R.partialRight(animations.exit, [{ direction: directionOut, duration, delay, stagger }])}
  >
    {children}
  </TransitionPseudo>
);

export default SlidePseudo;
