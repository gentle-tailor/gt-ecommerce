import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type DividerProps = {
  children?: React.ReactNode;
  className?: string;
};

const Divider: React.SFC<DividerProps> = ({
  children,
  className,
}) => (
  <div className={cx(className, styles.base)}>
    {children}
  </div>
);

export default Divider;
