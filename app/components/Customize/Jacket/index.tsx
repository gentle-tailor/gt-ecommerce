import React from 'react';
import Heading from 'components/Shared/Heading';
import Header from 'components/Customize/Shared/Header';
import Container from './Parts/Container';
import Content from './Parts/Content';
import PathSequence from './Parts/PathSequence';

type JacketProps = {
  children: React.ReactNode;
};

const Jacket: React.SFC<JacketProps> = ({
  children
}) => (
  <Container>
    <Header>
      <Heading level={2}>
        JACKET
      </Heading>
      <PathSequence />
    </Header>
    <Content>
      {children}
    </Content>
  </Container>
);

export default Jacket;
