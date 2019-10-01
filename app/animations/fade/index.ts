import anime from 'animejs';
import * as Animation from 'types/animation';

export type Params = Animation.AnimationParams<{}>;

const setup: Animation.AnimationSetup<Params> = (
  targets
) => {
  if (targets) {
    anime.set(
      targets,
      {
        opacity: 0,
        translateY: '20%',
      }
    );
  }
};

const fadeIn: Animation.Animation<Params> = (
  targets,
  {
    stagger = 100,
    delay,
    ...rest
  }
) => {
  setup(targets, {});

  return anime({
    ...rest,
    targets,
    easing: 'easeOutCirc',
    delay: anime.stagger(stagger, { start: delay }),
    opacity: 1,
    translateY: 0,
  });
};

const fadeOut: Animation.Animation<Params> = (
  targets,
  {
    stagger = 100,
    delay,
    ...rest
  }
) => {
  return anime({
    ...rest,
    targets,
    easing: 'easeOutCirc',
    delay: anime.stagger(stagger, { start: delay }),
    opacity: 0,
    translateY: '-20%',
  });
};

export default {
  setup,
  in: fadeIn,
  out: fadeOut,
};
