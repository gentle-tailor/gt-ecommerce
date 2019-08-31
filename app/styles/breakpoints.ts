import { Viewport } from 'types/userAgent';

type Breakpoint = {
  minWidth: number;
  maxWidth: number;
};

const breakpoints: Record<Viewport, Breakpoint> = {
  get mobile() {
    return {
      minWidth: 0,
      maxWidth: 480,
    }
  },
  get tabletPortrait() {
    return {
      minWidth: breakpoints.mobile.maxWidth + 1,
      maxWidth: 767,
    }
  },
  get tabletLandscape() {
    return {
      minWidth: breakpoints.tabletPortrait.maxWidth + 1,
      maxWidth: 1024,
    }
  },
  get desktop() {
    return {
      minWidth: breakpoints.tabletLandscape.maxWidth,
      maxWidth: 2048,
    }
  }
}

export default breakpoints;
