import React from 'react';
import Container from './Parts/Container';
import Header from './Parts/Header';

type CustomizeProps = {
  children: React.ReactNode;
};

const Customize: React.SFC<CustomizeProps> = ({
  children
}) => (
  <Container>
    <Header />
    {children}
  </Container>
);

export default Customize;
