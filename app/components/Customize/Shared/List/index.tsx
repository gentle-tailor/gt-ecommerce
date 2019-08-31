import styled from '@emotion/styled';

type ListProps = {
  children: React.ReactNode;
};

const List = styled('div')<ListProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > :not(:last-child) {
    margin-bottom: 2em;
  }
`;

export default List;
