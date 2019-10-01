import React from 'react';
import { Route } from 'react-router-dom';
import { getRoutePath } from './utils/routes';
import Link, { LinkProps } from 'components/Shared/Link';

type NavLinkProps = LinkProps;

const NavLink = React.forwardRef<any, NavLinkProps>((
  {
    to,
    ...rest
  },
  ref
) => (
  <Route
    exact={true}
    path={getRoutePath(to)}
  >
    {({ match }) => (
      <Link
        {...rest}
        to={to}
        active={!!match}
        ref={ref}
      />
    )}
  </Route>
));

export default NavLink;
