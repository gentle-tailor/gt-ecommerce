import styled from '@emotion/styled';

type ColumnProps = {
  children: React.ReactNode;
  width: number;
};

const Column = styled('div')<ColumnProps>`
  display: inline-block;
  min-width: ${props => 100 / props.width}%;
  padding: 0 10px 20px 10px
`;

export default Column;
