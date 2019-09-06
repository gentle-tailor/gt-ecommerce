import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type MetaProps = {
  children: React.ReactNode;
  className?: string;
};

const Meta: React.SFC<MetaProps> = ({
  children,
  className,
}) => (
  <div className={cx(className, styles.base)}>
    {children}
  </div>
);

export default Meta;
