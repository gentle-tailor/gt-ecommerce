import styled from '@emotion/styled';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = styled('div')<ContainerProps>`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.2rem;
`

export default Container;
