import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type BackgroundProps = {
  children: React.ReactNode;
  className?: string;
};

const Background = React.forwardRef<HTMLDivElement, BackgroundProps>(
  ({ children, className }, ref) => (
    <div
      className={cx(className, styles.base)}
      ref={ref}
    >
      {children}
    </div>
  )
);

export default Background;
