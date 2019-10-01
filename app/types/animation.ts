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
  {
    stagger?: number;
  } &
  V
);

export type TransitionStatus = (
  'mounting' |
  'mounted' |
  'unmounting' |
  'unmounted'
);

export type Direction = (
  'up' |
  'down' |
  'left' |
  'right'
);
