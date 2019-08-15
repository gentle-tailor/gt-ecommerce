import { LinkProps } from 'components/Shared/Link';
import { escapeLinkPath } from 'utils/paths/escape';

export const getRoutePath = (to: LinkProps['to']) => (
  typeof to === 'object'
    ? escapeLinkPath(to.pathname || '')
    : escapeLinkPath(to)
);
