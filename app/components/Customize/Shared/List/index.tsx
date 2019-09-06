import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type ListProps = {
  children: React.ReactNode;
  className?: string;
};

const List: React.SFC<ListProps> = ({
  children,
  className,
}) => (
  <div className={cx(className, styles.base)}>
    {children}
  </div>
);

export default List;
