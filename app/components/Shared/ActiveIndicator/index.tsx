import React from 'react';
import Container from './Container';
import Indicator from './Indicator';

type ActiveIndicatorProps = {
  children: React.ReactNode;
  active: boolean; 
};

const ActiveIndicator: React.SFC<ActiveIndicatorProps> = ({
  children,
  active
}) => (
  <Container>
    {children}
    <Indicator active={active} />
  </Container>
);

export default ActiveIndicator;
