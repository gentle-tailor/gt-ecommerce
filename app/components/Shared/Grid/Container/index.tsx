import styled from '@emotion/styled';

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = styled('div')<ContainerProps>`
  display: flex;
  flex-flow: row wrap;
`;

export default Container;
