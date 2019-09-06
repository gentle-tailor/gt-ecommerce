import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';
import GradientBorder from 'components/Shared/GradientBorder';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.SFC<ContainerProps> = ({
  children,
  className,
}) => (
  <GradientBorder className={cx(className, styles.base)}>
    {children}
  </GradientBorder>
);

export default Container;
