import styled from '@emotion/styled';

type MetaProps = {
  children: React.ReactNode;
};

const Meta = styled('div')<MetaProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 1em;
  width: 80%;
  height: 100%;
  border-bottom: 1px solid #E5E5E5;
`;

export default Meta;
