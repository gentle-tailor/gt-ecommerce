import React from 'react';
import Fade from 'components/Shared/Transitions/FadePseudo';
import Container from './Parts/Container';
import Editorials from './Parts/Sections/Editorials';
import Essentials from './Parts/Sections/Essentials';
import Featured from './Parts/Sections/Featured';
import Seasonal from './Parts/Sections/Seasonal';
import Customize from './Parts/Sections/Customize';
import Subscription from './Parts/Sections/Subscription';
import Section from './Parts/Section';

const Home: React.SFC = () => (
  <Container>
    <Fade
      status="mounting"
      duration={850}
      stagger={75}
      delay={200}
    >
      <Section>
        <Featured />
      </Section>
      <Section>
        <Customize />
      </Section>
      <Section>
        <Seasonal />
      </Section>
      <Section>
        <Essentials />
      </Section>
      <Section>
        <Editorials />
      </Section>
      <Section>
        <Subscription />
      </Section>
    </Fade>
  </Container>
);

export default Home;
