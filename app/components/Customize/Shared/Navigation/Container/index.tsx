import styled from '@emotion/styled';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = styled('div')<ContainerProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

export default Container;
