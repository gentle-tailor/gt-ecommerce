import styled from '@emotion/styled';

type ColumnProps = {
  children: React.ReactNode;
  className?: string;
};

const Column = styled('div')<ColumnProps>`
  flex-basis: 21.5rem;
`

export default Column;
