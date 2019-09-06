import React from 'react';

type PrimaryProps = {
  children: React.ReactNode;
  className?: string;
};

const Primary: React.SFC<PrimaryProps> = ({
  children,
  className,
}) => (
  <div className={className}>
    {children}
  </div>
);

export default Primary;
