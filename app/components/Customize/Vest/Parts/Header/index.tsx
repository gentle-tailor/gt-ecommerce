import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const Header: React.SFC<HeaderProps> = ({
  children,
  className,
}) => (
  <div className={cx(className, styles.base)}>
    {children}
  </div>
);

export default Header;
