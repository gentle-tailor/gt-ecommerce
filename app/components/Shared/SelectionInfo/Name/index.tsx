import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type NameProps = {
  children: React.ReactNode;
  className?: string;
};

const Name: React.SFC<NameProps> = ({
  children,
  className,
}) => (
  <div className={cx(className, styles.base)}>
    {children}
  </div>
);

export default Name;
