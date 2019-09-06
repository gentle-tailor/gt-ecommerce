import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type GradientBorderProps = {
  children?: React.ReactNode;
  className?: string;
};

const GradientBorder: React.SFC<GradientBorderProps> = ({
  children,
  className,
}) => (
  <div className={cx(className, styles.base)}>
    {children}
  </div>
);

export default GradientBorder;
