import styled from '@emotion/styled';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = styled('span')<ContainerProps>`
  display: inline-block;
  position: relative;
  min-height: 20px;
`;

export default Container;
