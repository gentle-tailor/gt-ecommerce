import styled from '@emotion/styled';

type ContainerProps = {
  children: React.ReactNode;
}

const Container = styled('div')<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;

  & > :not(:last-child) {
    margin-right: 2.5rem;
  }
`;

export default Container;
