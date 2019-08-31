import styled from '@emotion/styled';

type ContainerProps = {
  onClick?: () => void;
};

const Container = styled('button')<ContainerProps>`
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  border: 1px solid #E5E5E5;
  border-radius: 7px;

  & > :not(:last-child) {
    margin-right: 0.7em;
  }
`;

export default Container;
