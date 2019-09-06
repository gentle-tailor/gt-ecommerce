import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';
import GradientBox from 'components/Shared/GradientBox';

type MediaProps = {
  children?: React.ReactNode;
  className?: string;
};

const Media: React.SFC<MediaProps> = ({
  children,
  className,
}) => (
  <GradientBox className={cx(className, styles.base)}>
    {children}
  </GradientBox>
);

export default Media;
