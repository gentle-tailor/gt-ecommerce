import * as styles from './styles'
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.SFC<ButtonProps> = ({
  children,
  onClick,
}) => (
  <button
    className={styles.base}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
