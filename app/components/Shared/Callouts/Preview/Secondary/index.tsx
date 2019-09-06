import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type SecondaryProps = {
  children: React.ReactNode;
  className?: string;
};

const Secondary: React.SFC<SecondaryProps> = ({
  children,
  className,
}) => (
  <div className={cx(className, styles.base)}>
    {children}
  </div>
);

export default Secondary;
