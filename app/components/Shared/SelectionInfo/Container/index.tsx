import React from 'react';
import styled from '@emotion/styled';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = styled('div')<ContainerProps>`
  display: grid;
  grid-template-columns: 2fr 5fr auto;
  width: 100%;
`;

export default Container;
