import styled from '@emotion/styled';

type ContainerProps = {
  children: React.ReactNode;
}

const Container = styled('div')<ContainerProps>`
  display: inline-block;
  position: relative;
`;

export default Container;
