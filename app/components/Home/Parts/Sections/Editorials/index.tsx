import React from 'react';
import { PATH_EDITORIALS } from 'routes/paths';
import Link from 'components/Shared/Link';
import Secondary from 'components/Shared/Callouts/Secondary';
import Heading from 'components/Shared/Heading';
import Slides from 'components/Shared/Slides';
import Slide from 'components/Shared/Slide';

const Editorials: React.SFC = () => (
  <React.Fragment>
    <Secondary>
      <Secondary.Media mode="bald">
        <Slides>
          <Slide>
            <Slide.Media />
            <Slide.Meta>
              STORY 01
            </Slide.Meta>
          </Slide>
          <Slide>
            <Slide.Media />
            <Slide.Meta>
              STORY 02
            </Slide.Meta>
          </Slide>
          <Slide>
            <Slide.Media />
            <Slide.Meta>
              STORY 03
            </Slide.Meta>
          </Slide>
          <Slide>
            <Slide.Media />
            <Slide.Meta>
              STORY 04
            </Slide.Meta>
          </Slide>
          <Slide>
            <Slide.Media />
            <Slide.Meta>
              STORY 05
            </Slide.Meta>
          </Slide>
          <Slide>
            <Slide.Media />
            <Slide.Meta>
              STORY 06
            </Slide.Meta>
          </Slide>
        </Slides>
      </Secondary.Media>
      <Secondary.Meta>
        <Heading>
          EDITORIALS
        </Heading>
        <p>
          <Link to={PATH_EDITORIALS}>
            VIEW ALL...
          </Link>
        </p>
      </Secondary.Meta>
    </Secondary>
  </React.Fragment>
);

export default Editorials;
