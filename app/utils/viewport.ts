import { Viewport } from 'types/userAgent';
import breakpoints from 'styles/breakpoints';

export const getViewportSize = (viewport: Viewport) => (
  breakpoints[viewport].minWidth
);

export const isViewportAtLeast = (viewportA: Viewport, viewportB: Viewport) => (
  getViewportSize(viewportA) >= getViewportSize(viewportB)
);

export const isViewportAtMost = (viewportA: Viewport, viewportB: Viewport) => (
  isViewportAtLeast(viewportB, viewportA)
);
