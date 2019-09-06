import { css } from 'emotion';

export const base = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%;

  & > :not(:last-child) {
    margin-right: 3rem;
  }
`;
