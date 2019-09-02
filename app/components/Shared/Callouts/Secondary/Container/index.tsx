import styled from '@emotion/styled';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = styled('div')<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 530px;
  height: 570px;
`;

export default Container;
