import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type MediaProps = {
  className?: string;
};

const Media: React.SFC<MediaProps> = ({
  className,
}) => (
  <div className={cx(className, styles.base)} />
);

export default Media;
