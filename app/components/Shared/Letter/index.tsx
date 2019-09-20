import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type LetterProps = {
  children: React.ReactNode;
  className?: string;
};

const Letter = React.forwardRef<HTMLSpanElement, LetterProps>(
  ({ children, className }, ref) => (
    <span
      className={cx(className, styles.base)}
      ref={ref}
    >
      {children}
    </span>
  )
);

export default Letter;
