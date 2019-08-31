import React from 'react';
import styled from '@emotion/styled';

type NameProps = {
  children: React.ReactNode;
};

const Name = styled('div')<NameProps>`
  grid-column: 2;
  align-self: center;
`;

export default Name;
