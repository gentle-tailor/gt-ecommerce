import React from 'react';
import Container from './Parts/Container';
import Section from './Parts/Section';
import Jacket from './Parts/Sections/Jacket';
import Pants from './Parts/Sections/Pants';
import Vest from './Parts/Sections/Vest';

const Styles: React.SFC = () => (
  <Container>
    <Section>
      <Jacket />
    </Section>
    <Section>
      <Pants />
    </Section>
    <Section>
      <Vest />
    </Section>
  </Container>
);

export default Styles;
