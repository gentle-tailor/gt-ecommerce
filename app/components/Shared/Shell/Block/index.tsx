import styled from '@emotion/styled';

const Block = styled('div')`
  & > :not(last-child) {
    margin-right: 4em;
  }
`

export default Block;
