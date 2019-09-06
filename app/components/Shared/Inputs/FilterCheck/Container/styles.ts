import { css } from 'emotion';

export const base = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 8px;

  & > :not(:last-child) {
    margin-bottom: 1em;
  }
`;
