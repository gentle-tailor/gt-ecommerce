import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const Header = React.forwardRef<any, HeaderProps>((
  {
    children,
    className,
  },
  ref
) => (
    <header
      className={cx(className, styles.base)}
      ref={ref}
    >
      {children}
    </header>
  )
);

export default Header;
