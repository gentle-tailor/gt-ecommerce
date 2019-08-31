import React from 'react';
import styled from '@emotion/styled';

type PriceProps = {
  children: React.ReactNode;
};

const Price = styled('div')<PriceProps>`
  grid-column: 3;
  align-self: center;
  text-align: right;
`;

export default Price;
