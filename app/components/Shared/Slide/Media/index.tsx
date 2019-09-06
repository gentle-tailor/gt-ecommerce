import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type MediaProps = {
  children?: React.ReactNode;
  className?: string;
};

const Media: React.SFC<MediaProps> = ({
  children,
  className,
}) => (
  <div className={cx(className, styles.base)}>
    {children}
  </div>
);

export default Media;
