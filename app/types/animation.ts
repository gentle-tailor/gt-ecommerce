import { AnimeInstance, AnimeAnimParams } from 'animejs';
import { Omit } from './utility';

export type Animation<P = {}> = (
  (target: Target, params: P) => AnimeInstance
);

export type AnimationSetup<P = {}> = (
  (target: Target, params: P) => void
);

export type Target = (
  AnimeAnimParams['targets']
);

export type AnimationParams<V> = (
  Omit<AnimeAnimParams, 'targets'> &
  V
);

export type Direction = (
  'up' |
  'down' |
  'left' |
  'right'
);
