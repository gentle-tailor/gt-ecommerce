import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className }, ref) => (
    <div
      className={cx(className, styles.base)}
      ref={ref}
    >
      {children}
    </div>
  )
);

export default Container;
