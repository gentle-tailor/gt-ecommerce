import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type CheckProps = {
  className?: string;
};

const Check: React.SFC<CheckProps> = ({
  className,
}) => (
  <div className={cx(className, styles.base)} />
);

export default Check;
