import styled from '@emotion/styled';

type MetaProps = {
  children: React.ReactNode;
  className?: string;
};

const Meta = styled('div')<MetaProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-row: 3;
`;

export default Meta;
