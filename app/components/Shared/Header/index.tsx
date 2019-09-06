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
  <header className={cx(className, styles.base)}>
    {children}
  </header>
);

export default Header;
