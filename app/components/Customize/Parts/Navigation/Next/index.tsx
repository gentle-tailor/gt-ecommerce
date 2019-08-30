import styled from '@emotion/styled';

type NextProps = {
  children: React.ReactNode;
};

const Next = styled('div')<NextProps>`
  grid-column: 2;
  text-align: right;
`;

export default Next;
