import { css } from 'emotion';

export const base = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 3vw;
  }
`;
