import React from 'react';

type PantsProps = {
  children: React.ReactNode;
};

const Pants: React.SFC<PantsProps> = ({
  children
}) => (
  <div>
    {children}
  </div>
);

export default Pants;
