import React from 'react';
import * as R from 'ramda';
import { Target } from 'types/animation';
import fade, { Params } from 'animations/fade';
import TransitionPseudo, { TransitionPseudoProps } from 'components/Shared/TransitionPseudo';

const animations = (() => ({
  setup: fade.setup,
  start: (
    node: Target,
    params: Params
  ) => {
    const animation = fade.in(
      node,
      params
    );

    animation.play();
    return animation.finished;
  },
  exit: (
    node: Target,
    params: Params
  ) => {
    const animation = fade.out(
      node,
      params
    );

    animation.play();
    return animation.finished;
  },
}))();

export type FadePseudoProps = (
  Pick<TransitionPseudoProps, 'status' | 'onMounted' | 'onUnmounted'> &
  {
    children: React.ReactNode;
    duration?: number;
    delay?: number;
    stagger?: number;
  }
);

const FadePseudo: React.SFC<FadePseudoProps> = ({
  children,
  duration,
  delay,
  stagger,
  ...rest
}) => (
  <TransitionPseudo
    {...rest}
    setup={R.partialRight(animations.setup, [{ duration, delay, stagger }])}
    start={R.partialRight(animations.start, [{ duration, delay, stagger }])}
    exit={R.partialRight(animations.exit, [{ duration, delay, stagger }])}
  >
    {children}
  </TransitionPseudo>
);

export default FadePseudo;
