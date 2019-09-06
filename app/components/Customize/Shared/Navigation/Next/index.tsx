import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type NextProps = {
  children: React.ReactNode;
  className?: string;
};

const Next: React.SFC<NextProps> = ({
  children,
  className,
}) => (
  <div className={cx(className, styles.base)}>
    {children}
  </div>
);

export default Next;
