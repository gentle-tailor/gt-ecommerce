import styled from '@emotion/styled';

type ContentProps = {
  children: React.ReactNode;
};

const Content = styled('div')<ContentProps>`
  margin-top: 60px;
`

export default Content;
