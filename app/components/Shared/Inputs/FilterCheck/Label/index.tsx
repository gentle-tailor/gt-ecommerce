import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type LabelProps = {
  children: React.ReactNode;
  className?: string;
};

const Label: React.SFC<LabelProps> = ({
  children,
  className,
}) => (
  <span className={cx(className, styles.base)}>
    {children}
  </span>
);

export default Label;
