import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = React.forwardRef<HTMLSpanElement, ContainerProps>((
  {
    children,
    className,
  },
  ref
) => (
  <span
    className={cx(className, styles.base)}
    ref={ref}
  >
    {children}
  </span>
));

export default Container;
