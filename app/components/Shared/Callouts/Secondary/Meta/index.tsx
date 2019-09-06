import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type MetaProps = {
  children: React.ReactNode;
  align?: 'left' | 'right';
  className?: string;
};

const Meta: React.SFC<MetaProps> = ({
  children,
  align,
  className,
}) => (
  <div
    className={cx(
      className,
      styles.base,
      align === 'left' ? styles.left : styles.right
    )}
  >
    {children}
  </div>
);

export const isMeta = (child: React.ReactChild): child is React.ReactElement<MetaProps> => (
  React.isValidElement(child) && child.type === Meta
);

export default Meta;
