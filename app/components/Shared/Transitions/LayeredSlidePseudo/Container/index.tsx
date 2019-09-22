import * as styles from './styles';
import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.SFC<ContainerProps> = ({ children }) => (
  <div className={styles.base}>
    {children}
  </div>
);

export default Container;
