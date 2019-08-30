import styled from '@emotion/styled';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = styled('div')<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > :not(:last-child) {
    margin-bottom: 2em;
  }
`;

export default Container;
