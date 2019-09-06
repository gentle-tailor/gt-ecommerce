import { css } from 'emotion';

export const base = css`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: space-between;

  & > * {
    margin: auto;
  }
`;
