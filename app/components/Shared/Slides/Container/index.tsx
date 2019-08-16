import styled from '@emotion/styled';

type ContainerProps = {
  children: React.ReactNode;
}

const Container = styled('div')<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default Container;
