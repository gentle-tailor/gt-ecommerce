import React from 'react';
import * as PATHS from 'routes/paths';
import NavLink from 'components/Shared/NavLink';
import Container from 'components/Shared/Header';
import Shell from 'components/Shared/Shell';

const Header: React.SFC = () => (
  <Container>
    <Shell>
      <Shell.Block>
        <NavLink to={PATHS.PATH_ROOT}>
          HOME
        </NavLink>
        <NavLink to={PATHS.PATH_SHOP}>
          SHOP
        </NavLink>
        <NavLink to={PATHS.PATH_INFO}>
          INFO
        </NavLink>
        <span>
          EN
        </span>
      </Shell.Block>
    </Shell>
  </Container>
);

export default Header;
