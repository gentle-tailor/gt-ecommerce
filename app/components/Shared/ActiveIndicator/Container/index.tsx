import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.SFC<ContainerProps> = ({
  children,
  className,
}) => (
  <span className={cx(className, styles.base)}>
    {children}
  </span>
);

export default Container;
