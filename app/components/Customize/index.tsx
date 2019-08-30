import React from 'react';
import Heading from 'components/Shared/Heading';
import Header from './Parts/Header';
import Container from './Parts/Container';
import Section from './Parts/Section';
import Selections from './Parts/Selections';
import FooterNav from './Parts/FooterNav';

const Customize: React.SFC = () => (
  <Container>
    <Header>
      <Heading level={2}>
        CUSTOMIZE SUIT
      </Heading>
    </Header>
    <Section>
      <Selections />
    </Section>
    <Section>
      <FooterNav />
    </Section>
  </Container>
);

export default Customize;
