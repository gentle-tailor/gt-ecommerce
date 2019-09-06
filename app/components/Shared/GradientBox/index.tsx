import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type GradientBoxProps = {
  children?: React.ReactNode;
  className?: string;
};

const GradientBox: React.SFC<GradientBoxProps> = ({
  children,
  className,
}) => (
  <div className={cx(className, styles.base)}>
    {children}
  </div>
);

export default GradientBox;
