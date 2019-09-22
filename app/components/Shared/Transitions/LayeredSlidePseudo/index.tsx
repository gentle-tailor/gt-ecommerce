import React from 'react';
import Container from './Container';
import SlidePseudo, { SlidePseudoProps } from 'components/Shared/Transitions/SlidePseudo';

type LayeredSlidePseudoProps = (
  SlidePseudoProps
);

const LayeredSlidePseudo: React.SFC<LayeredSlidePseudoProps> = ({
  children,
  ...rest
}) => (
  <Container>
    <SlidePseudo {...rest}>
      {children}
    </SlidePseudo>
  </Container>
);

export default LayeredSlidePseudo;
