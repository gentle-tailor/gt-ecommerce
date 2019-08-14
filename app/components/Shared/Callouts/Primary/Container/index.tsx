import styled from '@emotion/styled';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = styled('div')<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 500px;
`

export default Container;
