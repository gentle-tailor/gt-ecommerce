import React from 'react';
import Container from './Container';
import Divider from './Divider';
import Section from './Section';
import Colors from './Sections/Colors';
import Materials from './Sections/Materials';
import Patterns from './Sections/Patterns';

const Filters: React.SFC = () => (
  <Container>
    <Section>
      <Colors />
    </Section>
    <Divider />
    <Section>
      <Materials />
    </Section>
    <Divider />
    <Section>
      <Patterns />
    </Section>
  </Container>
);

export default Filters;
