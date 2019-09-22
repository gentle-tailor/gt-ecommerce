import anime from 'animejs';
import * as Animation from 'types/animation';
import { opposite } from 'utils/directions';
import { getOffset, getProperty } from './utils/attribute';

export type Params = Animation.AnimationParams<{
  direction: Animation.Direction;
}>;

const setup: Animation.AnimationSetup<Params> = (
  targets,
  {
    direction,
  }
) => {
  if (targets) {
    anime.set(
      targets,
      {
        [getProperty(direction)]: getOffset(opposite(direction)),
      }
    );
  }
};

const slideIn: Animation.Animation<Params> = (
  targets,
  {
    direction,
    ...rest
  }
) => {
  setup(targets, { direction });

  return anime({
    targets,
    delay: anime.stagger(100),
    [getProperty(direction)]: '0',
    ...rest,
  });
};

const slideOut: Animation.Animation<Params> = (
  targets,
  {
    direction,
    ...rest
  }
) => {
  return anime({
    targets,
    delay: anime.stagger(100),
    [getProperty(direction)]: getOffset(opposite(direction)),
    ...rest,
  });
};

export default {
  setup,
  in: slideIn,
  out: slideOut,
};
