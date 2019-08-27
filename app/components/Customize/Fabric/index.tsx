import React from 'react';
import Container from './Parts/Container';
import Section from './Parts/Section';
import FabricSection from './Parts/Sections/Fabric';

const Fabric: React.SFC = () => (
  <Container>
    <Section>
      <FabricSection />
    </Section>
  </Container>
);

export default Fabric;
