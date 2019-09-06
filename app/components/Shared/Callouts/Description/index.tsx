import React from 'react';

type DescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

const Description: React.SFC<DescriptionProps> = ({
  children,
  className,
}) => (
  <div className={className}>
    {children}
  </div>
);

export default Description;
