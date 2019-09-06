import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type BlockProps = {
  children: React.ReactNode;
  className?: string;
};

const Block: React.SFC<BlockProps> = ({
  children,
  className,
}) => (
  <div className={cx(className, styles.base)}>
    {children}
  </div>
);

export default Block;
