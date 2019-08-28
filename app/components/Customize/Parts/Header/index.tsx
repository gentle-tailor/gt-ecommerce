import React from 'react';
import { css } from 'emotion';
import * as PATHS from 'routes/paths';
import Container from './Container';
import StepSequence from 'components/Shared/StepSequence';
import NavLink from 'components/Shared/NavLink';

const Header: React.SFC = () => (
  <Container>
    <StepSequence className={css`font-size: 8.5px;`}>
      <NavLink to={PATHS.PATH_CUSTOMIZE_FABRIC}>
        FABRIC
      </NavLink>
      <NavLink to={PATHS.PATH_CUSTOMIZE_STYLE}>
        STYLES
      </NavLink>
      <NavLink to={PATHS.PATH_CUSTOMIZE_ACCENT}>
        ACCENTS
      </NavLink>
      <NavLink to={PATHS.PATH_CUSTOMIZE_CONFIRM}>
        CONFIRM
      </NavLink>
    </StepSequence>
  </Container>
);

export default Header;
