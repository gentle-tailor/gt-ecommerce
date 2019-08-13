import { Viewport } from 'types/userAgent';
import { getViewportSize } from 'utils/viewport';

export const viewportBelow = (viewport: Viewport) => (
  `@media (max-width: ${getViewportSize(viewport)}px)`
);
