import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type CategoryProps = {
  children: React.ReactNode;
  className?: string;
};

const Category: React.SFC<CategoryProps> = ({
  children,
  className,
}) => (
  <div className={cx(className, styles.base)}>
    {children}
  </div>
);

export default Category;
