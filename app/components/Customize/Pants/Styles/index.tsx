import React from 'react';
import Section from 'components/Customize/Shared/Section';
import Container from './Parts/Container';
import FooterNav from './Parts/FooterNav';
import Selections from './Parts/Selections';

const Styles: React.SFC = () => (
  <Container>
    <Section>
      <Selections />
    </Section>
    <Section>
      <FooterNav />
    </Section>
  </Container>
);

export default Styles;
