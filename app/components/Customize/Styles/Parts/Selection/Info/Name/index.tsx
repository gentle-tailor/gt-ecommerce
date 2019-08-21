import React from 'react';
import { css } from 'emotion';
import Heading from 'components/Shared/Heading';

type NameProps = {
  children: React.ReactNode;
};

const Name: React.SFC<NameProps> = ({
  children
}) => (
  <div
    className={css`
      flex: 5;
    `}
  >
    <Heading>
      {children}
    </Heading>
  </div>
);

export default Name;
