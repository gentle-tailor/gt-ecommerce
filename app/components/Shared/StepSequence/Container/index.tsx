import styled from '@emotion/styled';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = styled('div')<ContainerProps>`
  display: flex;
  justify-content: center;
  width: 100%;

  & > :not(:last-child) {
    margin-right: 2.5rem;
  }
`;

export default Container;
