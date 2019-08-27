import styled from '@emotion/styled';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = styled('div')<ContainerProps>`
  display: grid;
  grid-template-rows: 20% auto 20%;
  padding: 0 20px;
  width: 230px;
  height: 260px;
  border-radius: 10px;
  box-shadow: 0 3px 14px 0 #E5E5E5;
`;

export default Container;
