import { Viewport } from 'types/userAgent';

type Breakpoint = {
  minWidth: number;
  maxWidth: number;
};

const mobile: Breakpoint = {
  minWidth: 0,
  maxWidth: 480,
};

const tabletPortrait: Breakpoint = {
  minWidth: mobile.maxWidth + 1,
  maxWidth: 767,
};

const tabletLandscape: Breakpoint = {
  minWidth: tabletPortrait.maxWidth + 1,
  maxWidth: 1024,
};

const desktop: Breakpoint = {
  minWidth: tabletLandscape.maxWidth,
  maxWidth: 2048,
};

export default {
  mobile,
  tabletPortrait,
  tabletLandscape,
  desktop
} as Record<Viewport, Breakpoint>;
