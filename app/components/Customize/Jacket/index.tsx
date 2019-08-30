
import React from 'react';
import Container from './Parts/Container';
import Content from './Parts/Content';
import Header from './Parts/Header';
import PathSequence from './Parts/PathSequence';

type JacketProps = {
  children: React.ReactNode;
};

const Jacket: React.SFC<JacketProps> = ({
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

export default Jacket;
