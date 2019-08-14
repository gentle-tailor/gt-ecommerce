import React from 'react';
import Divider from './Divider';
import Description from 'components/Shared/Callouts/Description';
import Secondary from 'components/Shared/Callouts/Secondary';
import Heading from 'components/Shared/Heading';
import HeadingAuto from 'components/Shared/HeadingAuto';
import Header from 'components/Home/Parts/Sections/Header';

const Seasonal: React.SFC = () => (
  <React.Fragment>
    <Header>
      <Heading level={2}>
        SUMMER FAVORITES
      </Heading>
    </Header>
    <Secondary>
      <Secondary.Meta>
        <Description>
          <HeadingAuto>
            NAPOLEON
          </HeadingAuto>
          <p>
            FROM $199.99
          </p>
        </Description>
      </Secondary.Meta>
      <Secondary.Media />
    </Secondary>
    <Divider />
    <Secondary>
      <Secondary.Media />
      <Secondary.Meta>
        <Description>
          <HeadingAuto>
            LINEN
          </HeadingAuto>
          <p>
            FROM $199.99
          </p>
        </Description>
      </Secondary.Meta>
    </Secondary>
  </React.Fragment>
);

export default Seasonal;
