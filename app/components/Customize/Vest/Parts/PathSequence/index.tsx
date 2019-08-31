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
    <NavLink to={PATHS.PATH_CUSTOMIZE_VEST_STYLES}>
      STYLES
    </NavLink>
  </StepSequence>
);

export default PathSequence;
