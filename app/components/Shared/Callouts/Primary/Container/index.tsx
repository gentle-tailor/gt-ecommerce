import styled from '@emotion/styled';
import GradientBox from 'components/Shared/GradientBox';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = styled(GradientBox)<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;

export default Container;
