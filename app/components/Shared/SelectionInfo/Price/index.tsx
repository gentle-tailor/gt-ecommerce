import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type PriceProps = {
  children: React.ReactNode;
  className?: string;
};

const Price: React.SFC<PriceProps> = ({
  children,
  className,
}) => (
  <div className={cx(className, styles.base)}>
    {children}
  </div>
);

export default Price;
