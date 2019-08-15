import React from 'react';
import { Route } from 'react-router-dom';
import { getRoutePath } from './utils/routes';
import Link, { LinkProps } from 'components/Shared/Link';

type NavLinkProps = LinkProps;

const NavLink: React.SFC<NavLinkProps> = ({
  to,
  ...rest
}) => (
  <Route
    exact={true}
    path={getRoutePath(to)}
  >
    {({ match }) => (
      <Link
        {...rest}
        to={to}
        active={!!match}
      />
    )}
  </Route>
);

export default NavLink;
