import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';
import Background from 'components/Shared/Background';

type LayerProps = {
  children?: React.ReactNode;
  className?: string;
};

const Layer = React.forwardRef<HTMLDivElement, LayerProps>(
  ({ children, className }, ref) => (
    <Background
      className={cx(className, styles.base)}
      ref={ref}
    >
      {children}
    </Background>
  )
);

export default Layer;
