import styled from '@emotion/styled';

type PrevProps = {
  children: React.ReactNode;
};

const Prev = styled('div')<PrevProps>`
  grid-column: 1;
  text-align: left;
`;

export default Prev;
