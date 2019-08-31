
import React from 'react';
import Heading from 'components/Shared/Heading';
import Header from 'components/Customize/Shared/Header';
import Container from './Parts/Container';
import Content from './Parts/Content';
import PathSequence from './Parts/PathSequence';

type VestProps = {
  children: React.ReactNode;
};

const Vest: React.SFC<VestProps> = ({
  children
}) => (
  <Container>
    <Header>
      <Heading level={2}>
        VEST
      </Heading>
      <PathSequence />
    </Header>
    <Content>
      {children}
    </Content>
  </Container>
);

export default Vest;
