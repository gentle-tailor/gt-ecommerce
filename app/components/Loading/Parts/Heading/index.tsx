import * as styles from './styles';
import React from 'react';
import Text from 'components/Shared/Text';

type HeadingProps = {
  children: React.ReactNode;
};

const Heading = React.forwardRef<HTMLDivElement, HeadingProps>(
  ({ children }, ref) => (
    <div
      className={styles.base}
      ref={ref}
    >
      {typeof children === 'string'
        ? [...children].map((letter, i) => <Text key={i}>{letter}</Text>)
        : children
      }
    </div>
  )
);

export default Heading;
