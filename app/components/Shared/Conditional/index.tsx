import React from 'react';

type ConditionalProps = {
  children: React.ReactNode;
  render: boolean;
};

const Conditional: React.SFC<ConditionalProps> = ({
  children,
  render,
}) => (
  <React.Fragment>
    {render && children}
  </React.Fragment>
);

export default Conditional;
