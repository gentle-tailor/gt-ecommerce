import styled from '@emotion/styled';
import GradientBorder from 'components/Shared/GradientBorder';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = styled(GradientBorder)<ContainerProps>`
  width: 100%;
  height: 90%;
  overflow: hidden;
`;

export default Container;
