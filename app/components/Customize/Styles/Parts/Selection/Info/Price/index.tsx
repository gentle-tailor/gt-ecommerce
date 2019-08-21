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
      text-align: right;
    `}
  >
    {children}
  </div>
);

export default Category;
