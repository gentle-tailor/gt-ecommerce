import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';
import GradientBox from 'components/Shared/GradientBox';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.SFC<ContainerProps> = ({
  children,
  className,
}) => (
  <GradientBox className={cx(className, styles.base)}>
    {children}
  </GradientBox>
);

export default Container;
