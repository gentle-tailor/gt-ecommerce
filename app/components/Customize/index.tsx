import React from 'react';
import Section from 'components/Customize/Shared/Section';
import Header from 'components/Customize/Shared/Header';
import Heading from 'components/Shared/Heading';
import Container from './Parts/Container';
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
