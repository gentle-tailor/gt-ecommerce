import { css } from 'emotion';

export const base = css`
  display: flex;
  justify-content: center;
  width: 100%;

  & > :not(:last-child) {
    margin-right: 2.5rem;
  }
`;
