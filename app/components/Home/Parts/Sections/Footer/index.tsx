import * as styles from './styles';
import React from 'react';
import { cx, css } from 'emotion';

type FooterProps = {
  children: React.ReactNode;
  align?: 'left' | 'right' | 'center';
};

const Footer: React.SFC<FooterProps> = ({
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

export default Footer;
