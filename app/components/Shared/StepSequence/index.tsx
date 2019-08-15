import React from 'react';
import { intersperse } from 'ramda';
import Container from './Container';
import Indicator from './Indicator';

type StepSequenceProps = {
  children: React.ReactNode;
}

const StepSequence: React.SFC<StepSequenceProps> = ({ children }) => (
  <Container>
    {intersperse(
      <Indicator />,
      React.Children.toArray(children)
    ).map((child, i) => (
      <React.Fragment key={`step_${i}`}>
        {child}
      </React.Fragment>
    ))}
  </Container>
);

export default StepSequence;
