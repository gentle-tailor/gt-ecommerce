import React from 'react';
import Container from './Container';
import Indicator from './Indicator';

type ActiveIndicatorProps = {
  children: React.ReactNode;
  active: boolean;
};

const ActiveIndicator = React.forwardRef<HTMLSpanElement, ActiveIndicatorProps>((
  {
    children,
    active,
  },
  ref
) => (
  <Container ref={ref}>
    {children}
    <Indicator active={active} />
  </Container>
));

export default ActiveIndicator;
