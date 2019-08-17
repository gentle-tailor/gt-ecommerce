import styled from '@emotion/styled';

type MetaProps = {
  children: React.ReactNode;
};

const Meta = styled('div')<MetaProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Meta;
