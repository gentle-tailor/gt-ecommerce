import { css } from 'emotion';

export const base = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > :not(:last-child) {
    margin-bottom: 2em;
  }
`;
