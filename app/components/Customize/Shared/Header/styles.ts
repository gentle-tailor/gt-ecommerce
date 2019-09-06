import { css } from 'emotion';

export const base = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 40px;
  width: 100%;

  & > :not(:last-child) {
    margin-bottom: 40px;
  }
`;