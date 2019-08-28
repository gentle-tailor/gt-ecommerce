import React from 'react';
import Container from './Parts/Container';
import Section from './Parts/Section';
import Lining from './Parts/Sections/Lining';
import Signature from './Parts/Sections/Signature';
import Button from './Parts/Sections/Button';

const Accents: React.SFC = () => (
  <Container>
    <Section>
      <Lining />
    </Section>
    <Section>
      <Signature />
    </Section>
    <Section>
      <Button />
    </Section>
  </Container>
);

export default Accents;
