import React from 'react';
import * as PATHS from 'routes/paths';
import Slide from 'components/Shared/Transitions/SlidePseudo';
import NavLink from 'components/Shared/NavLink';
import Container from 'components/Shared/Header';
import Shell from 'components/Shared/Shell';
import ActiveIndicator from 'components/Shared/ActiveIndicator';

const Header: React.SFC = () => (
  <Container>
    <Shell>
      <Shell.Block>
        <Slide
          status="mounting"
          directionIn="up"
          directionOut="up"
          duration={800}
          stagger={75}
        >
          <NavLink to={PATHS.PATH_ROOT}>
            HOME
          </NavLink>
          <NavLink to={PATHS.PATH_SHOP}>
            SHOP
          </NavLink>
          <NavLink to={PATHS.PATH_INFO}>
            INFO
          </NavLink>
          <ActiveIndicator active={false}>
            EN
          </ActiveIndicator>
        </Slide>
      </Shell.Block>
    </Shell>
  </Container>
);

export default Header;
