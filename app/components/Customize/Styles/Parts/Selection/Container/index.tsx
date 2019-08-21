import styled from '@emotion/styled';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = styled('div')<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  max-width: 95%;

  & > :not(:last-child) {
    margin-bottom: 4em;
  }
`;

export default Container;
