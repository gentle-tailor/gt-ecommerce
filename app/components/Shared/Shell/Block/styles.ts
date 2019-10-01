import { css } from 'emotion';

export const base = css`
  overflow: hidden;
  & > :not(:last-child) {
    margin-right: 4em;
  }
`;
