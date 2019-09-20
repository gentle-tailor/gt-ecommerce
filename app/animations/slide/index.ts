import anime from 'animejs';
import * as R from 'ramda';
import * as Animation from 'types/animation';

export type Params = Animation.AnimationParams<{
  direction: Animation.Direction;
}>;

const getTranslate = R.cond([
  [R.equals('up'), R.always({ translateY: '-100%' })],
  [R.equals('down'), R.always({ translateY: '100%' })],
  [R.equals('left'), R.always({ translateX: '-100%' })],
  [R.equals('right'), R.always({ translateX: '100%' })],
]);

export const slide: Animation.Animation<Params> = (
  targets,
  {
    direction,
    ...rest
  }
) => (
  anime({
    targets,
    delay: anime.stagger(100),
    ...rest,
    ...getTranslate(direction),
  })
);

export default slide;
