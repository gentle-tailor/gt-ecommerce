import * as styles from './styles';
import React from 'react';
import { cx, css } from 'emotion';

type HeaderProps = {
  children: React.ReactNode;
  align?: 'left' | 'right' | 'center';
};

const Header: React.SFC<HeaderProps> = ({
  children,
  align = 'center',
}) => (
  <div
    className={cx(
      styles.base,
      css`text-align: ${align};`
    )}
  >
    {children}
  </div>
);

export default Header;
