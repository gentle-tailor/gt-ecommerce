import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, className }, ref) => (
    <div
      className={cx(className, styles.base)}
      ref={ref}
    >
      {children}
    </div>
  )
);

export default Header;
