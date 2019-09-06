import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type PrevProps = {
  children: React.ReactNode;
  className?: string;
};

const Prev: React.SFC<PrevProps> = ({
  children,
  className,
}) => (
  <div className={cx(className, styles.base)}>
    {children}
  </div>
);

export default Prev;
