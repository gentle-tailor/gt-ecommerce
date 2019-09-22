import React from 'react';
import Container from './Container';
import Slide, { SlideProps } from 'components/Shared/Transitions/Slide';

type LayeredSlideProps = (
  SlideProps
);

const LayeredSlide: React.SFC<LayeredSlideProps> = ({
  children,
  ...rest
}) => (
  <Container>
    <Slide {...rest}>
      {children}
    </Slide>
  </Container>
);

export default LayeredSlide;
