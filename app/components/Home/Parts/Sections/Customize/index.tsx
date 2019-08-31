import React from 'react';
import { PATH_CUSTOMIZE } from 'routes/paths';
import Link from 'components/Shared/Link';
import Description from 'components/Shared/Callouts/Description';
import Primary from 'components/Shared/Callouts/Primary';
import Heading from 'components/Shared/Heading';

const CUSTOMIZE: React.SFC = () => (
  <React.Fragment>
    <Primary>
      <Primary.Meta>
        <Description>
          <Heading>
            CUSTOMIZE
          </Heading>
          <p>
            <Link to={PATH_CUSTOMIZE}>
              DESIGN YOUR OWN
            </Link>
          </p>
        </Description>
      </Primary.Meta>
      <Primary.Media/ >
    </Primary>
  </React.Fragment>
);

export default CUSTOMIZE;
