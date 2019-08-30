import React from 'react';
import styled from '@emotion/styled';

type CategoryProps = {
  children: React.ReactNode;
};

const Category = styled('div')<CategoryProps>`
  grid-column: 1;
  align-self: center;
`;

export default Category;
