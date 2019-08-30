
import React from 'react';
import Container from './Parts/Container';
import Content from './Parts/Content';
import Header from './Parts/Header';
import PathSequence from './Parts/PathSequence';

type PantsProps = {
  children: React.ReactNode;
};

const Pants: React.SFC<PantsProps> = ({
  children
}) => (
  <Container>
    <Header>
      <PathSequence />
    </Header>
    <Content>
      {children}
    </Content>
  </Container>
);

export default Pants;
