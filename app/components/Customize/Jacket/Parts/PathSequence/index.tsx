import React from 'react';
import { css } from 'emotion';
import * as PATHS from 'routes/paths';
import StepSequence from 'components/Shared/StepSequence';
import NavLink from 'components/Shared/NavLink';

const PathSequence: React.SFC = () => (
  <StepSequence className={css`font-size: 8.5px;`}>
    <NavLink to={PATHS.PATH_CUSTOMIZE}>
      CUSTOMIZE
    </NavLink>
    <NavLink to={PATHS.PATH_CUSTOMIZE_JACKET_FABRIC}>
      FABRIC
    </NavLink>
    <NavLink to={PATHS.PATH_CUSTOMIZE_JACKET_STYLES}>
      STYLES
    </NavLink>
    <NavLink to={PATHS.PATH_CUSTOMIZE_JACKET_ACCENTS}>
      ACCENTS
    </NavLink>
  </StepSequence>
);

export default PathSequence;
