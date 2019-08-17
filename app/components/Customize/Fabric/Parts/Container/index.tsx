import styled from '@emotion/styled';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = styled('div')<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px;
`;

export default Container;
