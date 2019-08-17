import styled from '@emotion/styled';

const Collapsible = styled('div')`
  display: flex;
  flex-direction: column;

  & > :not(:last-child) {
    margin-bottom: 2em;
  }
`;

export default Collapsible;
