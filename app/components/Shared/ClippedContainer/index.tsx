import * as styles from './styles';
import React from 'react';
import { cx } from 'emotion';

type ClippedBoxProps = {
  children: React.ReactNode;
  className?: string;
};

const ClippedBox = React.forwardRef<any, ClippedBoxProps>((
  {
    children,
    className,
  },
  ref
) => (
  <div className={cx(className, styles.base)}>
    {React.isValidElement(children)
      ? React.cloneElement(React.Children.only(children), { ref })
      : null
    }
  </div>
));

export default ClippedBox;
