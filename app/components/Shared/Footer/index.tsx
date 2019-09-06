import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type FooterProps = {
  children: React.ReactNode;
  className?: string;
};

const Footer: React.SFC<FooterProps> = ({
  children,
  className,
}) => (
  <footer className={cx(className, styles.base)}>
    {children}
  </footer>
);

export default Footer;
