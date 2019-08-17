import styled from '@emotion/styled';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = styled('div')<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 200px;
  border-radius: 10px;
  box-shadow: 0 3px 14px 0 #E5E5E5;

  & > :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export default Container;
