import styled from '@emotion/styled';

type MediaProps = {
  children: React.ReactNode;
  className?: string;
};

const Media = styled('div')<MediaProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 2;
  align-self: center;
`;

export default Media;
