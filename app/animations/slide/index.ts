import anime from 'animejs';
import * as Animation from 'types/animation';
import { opposite } from 'utils/directions';
import * as attribute from './utils/attribute';

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
        [attribute.getPerpendicularProperty(direction)]: 0,
        [attribute.getProperty(direction)]: attribute.getOffset(opposite(direction)),
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
    ...rest,
    targets,
    easing: 'easeInOutCirc',
    delay: anime.stagger(rest.delay),
    [attribute.getProperty(direction)]: '0',
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
    ...rest,
    targets,
    easing: 'easeInOutCirc',
    delay: anime.stagger(rest.delay),
    [attribute.getProperty(direction)]: attribute.getOffset(opposite(direction)),
  });
};

export default {
  setup,
  in: slideIn,
  out: slideOut,
};
