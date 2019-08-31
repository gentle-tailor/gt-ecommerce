import styled from '@emotion/styled';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = styled('div')<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 8px;

  & > :not(:last-child) {
    margin-bottom: 1em;
  }
`;

export default Container;
