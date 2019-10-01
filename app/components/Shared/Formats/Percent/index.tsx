import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type PercentProps = {
  value: number;
  className?: string;
};

const Percent = React.forwardRef<HTMLSpanElement, PercentProps>(
  ({ value, className }, ref) => (
    <span
      className={cx(className, styles.base)}
      ref={ref}
    >
      {value}%
    </span>
  )
);

export default Percent;
