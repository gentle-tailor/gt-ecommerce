import React from 'react';
import { css } from 'emotion';

type CategoryProps = {
  children: React.ReactNode;
};

const Category: React.SFC<CategoryProps> = ({
  children
}) => (
  <div
    className={css`
      flex: 2;
    `}
  >
    {children}
  </div>
);

export default Category;
