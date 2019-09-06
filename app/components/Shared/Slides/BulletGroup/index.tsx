import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type BulletGroupProps = {
  children: React.ReactNode;
  className?: string;
};

const BulletGroup: React.SFC<BulletGroupProps> = ({
  children,
  className,
}) => (
  <div className={cx(className, styles.base)}>
    {children}
  </div>
);

export default BulletGroup;
