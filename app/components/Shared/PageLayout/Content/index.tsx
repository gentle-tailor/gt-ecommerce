import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type ContentProps = {
  children: React.ReactNode;
  className?: string;
};

const Content: React.SFC<ContentProps> = ({
  children,
  className,
}) => (
  <div className={cx(className, styles.base)}>
    {children}
  </div>
);

export default Content;
