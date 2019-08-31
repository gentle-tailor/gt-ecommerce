import styled from '@emotion/styled';

type MetaProps = {
  children: React.ReactNode;
};

const Meta = styled('div')<MetaProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  height: 70px;
  border-bottom: 1px solid #E5E5E5;
`;

export default Meta;
