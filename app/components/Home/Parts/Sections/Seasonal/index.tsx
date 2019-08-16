import React from 'react';
import Divider from './Divider';
import Section from './Section';
import Description from 'components/Shared/Callouts/Description';
import Secondary from 'components/Shared/Callouts/Secondary';
import Heading from 'components/Shared/Heading';

const Seasonal: React.SFC = () => (
  <React.Fragment>
    <Section align="right">
      <Secondary>
        <Secondary.Meta>
          <Description>
            <Heading>
              NAPOLEON
            </Heading>
            <p>
              SEASONAL 01
            </p>
          </Description>
        </Secondary.Meta>
        <Secondary.Media />
      </Secondary>
    </Section>
    <Divider />
    <Section align="left">
      <Secondary>
        <Secondary.Media />
        <Secondary.Meta>
          <Description>
            <Heading>
              LINEN
            </Heading>
            <p>
              SEASONAL 02
            </p>
          </Description>
        </Secondary.Meta>
      </Secondary>
    </Section>
  </React.Fragment>
);

export default Seasonal;
