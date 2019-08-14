import React from 'react';
import Description from 'components/Shared/Callouts/Description';
import Secondary from 'components/Shared/Callouts/Secondary';
import Heading from 'components/Shared/Heading';
import HeadingAuto from 'components/Shared/HeadingAuto';
import Header from 'components/Home/Parts/Sections/Header';

const CUSTOMIZE: React.SFC = () => (
  <React.Fragment>
    <Header>
      <Heading>
        CUSTOMIZE
      </Heading>
    </Header>
    <Secondary>
      <Secondary.Meta>
        <Description>
          <HeadingAuto>
            DESIGN YOUR OWN
          </HeadingAuto>
          <p>
            FROM $199.99
          </p>
        </Description>
      </Secondary.Meta>
      <Secondary.Media/ >
    </Secondary>
  </React.Fragment>
);

export default CUSTOMIZE;
