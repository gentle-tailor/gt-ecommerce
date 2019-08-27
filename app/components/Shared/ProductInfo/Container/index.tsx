import React from 'react';
import { css } from 'emotion';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.SFC<ContainerProps> = ({
  children
}) => (
  <div
    className={css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    `}
  >
    {children}
  </div>
);

export default Container;
