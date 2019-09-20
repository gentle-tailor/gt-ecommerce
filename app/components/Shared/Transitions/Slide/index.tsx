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
    const animation = slide(
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
    const animation = slide(
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

type SlideProps = {
  children: React.ReactNode;
  in: boolean;
  direction: Params['direction'];
  duration?: number;
};

const Slide: React.SFC<SlideProps> = ({
  children,
  ...rest
}) => (
  <Transition
    in={rest.in}
    start={R.partialRight(animations.start, [rest])}
    exit={R.partialRight(animations.exit, [rest])}
  >
    {children}
  </Transition>
)

export default Slide;
