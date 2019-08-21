import React from 'react';
import Container from './Parts/Container';
import Section from './Parts/Section';
import Selection from './Parts/Selection';

const Fabric: React.SFC = () => (
  <Container>
    <Section>
      <Selection />
    </Section>
  </Container>
);

export default Fabric;
