
import React from 'react';
import Heading from 'components/Shared/Heading';
import Header from 'components/Customize/Shared/Header';
import Container from './Parts/Container';
import Content from './Parts/Content';
import PathSequence from './Parts/PathSequence';

type PantsProps = {
  children: React.ReactNode;
};

const Pants: React.SFC<PantsProps> = ({
  children
}) => (
  <Container>
    <Header>
      <Heading level={2}>
        PANTS
      </Heading>
      <PathSequence />
    </Header>
    <Content>
      {children}
    </Content>
  </Container>
);

export default Pants;
