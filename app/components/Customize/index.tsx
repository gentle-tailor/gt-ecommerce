import React from 'react';
import Container from './Parts/Container';
import Content from './Parts/Content';
import Header from './Parts/Header';

type CustomizeProps = {
  children: React.ReactNode;
};

const Customize: React.SFC<CustomizeProps> = ({
  children
}) => (
  <Container>
    <Header />
    <Content>
      {children}
    </Content>
  </Container>
);

export default Customize;
