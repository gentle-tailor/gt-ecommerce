import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion'; 

export type BulletProps = {
  active?: boolean;
  className?: string;
  onClick: () => void;
};

const Bullet: React.SFC<BulletProps> = ({
  active,
  className,
  onClick,
}) => (
  <span
    className={cx(
      className,
      active ? styles.active : styles.base
    )}
    onClick={onClick}
  />
);

export default Bullet;
