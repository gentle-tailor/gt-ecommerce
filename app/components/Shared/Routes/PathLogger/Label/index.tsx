import React from 'react';

type LabelProps = {
  children: React.ReactNode;
};

const Label: React.SFC<LabelProps> = ({ children }) => (
  <div>
    <h3>
      {children}
    </h3>
  </div>
);

export default Label;
