import React from 'react';
import { PATH_SHOP } from 'routes/paths';
import Link from 'components/Shared/Link';
import Secondary from 'components/Shared/Callouts/Secondary';
import Heading from 'components/Shared/Heading';
import Slides from 'components/Shared/Slides';
import Slide from 'components/Shared/Slide';

const Essentials: React.SFC = () => (
  <React.Fragment>
    <Secondary>
      <Secondary.Meta>
        <Heading>
          ESSENTIALS
        </Heading>
        <p>
          <Link to={PATH_SHOP}>
            VIEW ALL...
          </Link>
        </p>
      </Secondary.Meta>
      <Secondary.Media mode="bald">
        <Slides>
          <Slide>
            <Slide.Media />
            <Slide.Meta>
              PRIMO
            </Slide.Meta>
          </Slide>
          <Slide>
            <Slide.Media />
            <Slide.Meta>
              BRUNICO
            </Slide.Meta>
          </Slide>
          <Slide>
            <Slide.Media />
            <Slide.Meta>
              RAVELLO
            </Slide.Meta>
          </Slide>
          <Slide>
            <Slide.Media />
            <Slide.Meta>
              MADISON
            </Slide.Meta>
          </Slide>
          <Slide>
            <Slide.Media />
            <Slide.Meta>
              CARTESSIO
            </Slide.Meta>
          </Slide>
        </Slides>
      </Secondary.Media>
    </Secondary>
  </React.Fragment>
);

export default Essentials;
