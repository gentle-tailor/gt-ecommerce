import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';
import GradientBox from 'components/Shared/GradientBox';

type MediaProps = {
  className?: string;
};

const Media: React.SFC<MediaProps> = ({
  className,
}) => (
  <GradientBox className={cx(className, styles.base)} />
);

export default Media;
