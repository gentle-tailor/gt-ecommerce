import React from 'react';
import Container from './Container';
import Slider from './Slider';

type PanelGroupProps = {
  children: React.ReactNode;
  panelCount: number;
  activeIndex: number;
};

const PanelGroup: React.SFC<PanelGroupProps> = ({
  children,
  ...rest
}) => (
  <Container>
    <Slider {...rest}>
      {children}
    </Slider>
  </Container>
);

export default PanelGroup;
