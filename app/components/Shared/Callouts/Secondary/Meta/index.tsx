import styled from '@emotion/styled';
import Box from 'components/Shared/Box';

type MetaProps = {
  children: React.ReactNode;
};

const Meta = styled(Box)<MetaProps>`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 3em;
  height: 100%;
  text-align: left;
`;

export default Meta;
