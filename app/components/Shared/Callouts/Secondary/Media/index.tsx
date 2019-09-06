import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';
import GradientBorder from 'components/Shared/GradientBorder';

type MediaProps = {
  children?: React.ReactNode;
  align?: 'left' | 'right';
  mode?: 'wire' | 'bald';
  className?: string;
};

const Media: React.SFC<MediaProps> = ({
  children,
  align,
  mode,
  className,
}) => (
  <GradientBorder
    className={cx(
      className,
      styles.base,
      mode === 'bald' && styles.bald,
      align === 'left' ? styles.left : styles.right
    )}
  >
    {children}
  </GradientBorder>
);

export const isMedia = (child: React.ReactChild): child is React.ReactElement<MediaProps> => (
  React.isValidElement(child) && child.type === Media
);

export default Media;
