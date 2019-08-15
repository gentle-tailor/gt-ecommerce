import React from 'react';
import { intersperse } from 'ramda';
import Container from './Container';
import Indicator from './Indicator';

type StepSequenceProps = {
  children: React.ReactNode;
  className?: string;
}

const StepSequence: React.SFC<StepSequenceProps> = ({
  children,
  className,
}) => (
  <Container className={className}>
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
