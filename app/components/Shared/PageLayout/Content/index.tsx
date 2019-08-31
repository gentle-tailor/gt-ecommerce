import styled from '@emotion/styled';

type ContentProps = {
  children: React.ReactNode;
};

const Content = styled('div')<ContentProps>`
  margin-top: 100px;
  padding: 0 16px;
`

export default Content;
