import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type BlockProps = {
  children: React.ReactNode;
  className?: string;
};

const Block = React.forwardRef<HTMLDivElement, BlockProps>((
  {
    children,
    className,
  },
  ref
) => (
    <div
      className={cx(className, styles.base)}
      ref={ref}
    >
      {children}
    </div>
  )
);

export default Block;
