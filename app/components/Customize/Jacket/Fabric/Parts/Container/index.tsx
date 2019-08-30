import styled from '@emotion/styled';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = styled('div')<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Container;
