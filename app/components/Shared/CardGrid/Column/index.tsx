import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type ColumnProps = {
  children: React.ReactNode;
  className?: string;
};

const Column: React.SFC<ColumnProps> = ({
  children,
  className,
}) => (
  <div className={cx(className, styles.base)}>
    {children}
  </div>
);

export default Column;
