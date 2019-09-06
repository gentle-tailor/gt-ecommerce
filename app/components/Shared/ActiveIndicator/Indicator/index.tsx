import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type IndicatorProps = {
  active: boolean;
  className?: string;
};

const Indicator: React.SFC<IndicatorProps> = ({
  active,
  className,
}) => (
  <span
    className={cx(
      className,
      active ? styles.active : styles.base
    )}
  />
);

export default Indicator;
