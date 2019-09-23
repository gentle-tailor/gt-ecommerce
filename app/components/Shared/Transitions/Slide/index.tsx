import React from 'react';
import * as R from 'ramda';
import { Target } from 'types/animation';
import { opposite } from 'utils/directions';
import slide, { Params } from 'animations/slide';
import Transition from 'components/Shared/Transition';

const animations = (() => ({
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

export type SlideProps = {
  children: React.ReactNode;
  in: boolean;
  directionIn: Params['direction'];
  directionOut: Params['direction'];
  duration?: number;
  delay?: number;
};

const Slide: React.SFC<SlideProps> = ({
  children,
  directionIn,
  directionOut,
  ...rest
}) => (
  <Transition
    in={rest.in}
    start={R.partialRight(animations.start, [{ direction: directionIn, ...rest }])}
    exit={R.partialRight(animations.exit, [{ direction: directionOut, ...rest }])}
  >
    {children}
  </Transition>
);

export default Slide;
