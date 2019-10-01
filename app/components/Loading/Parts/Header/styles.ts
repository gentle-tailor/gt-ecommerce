import { css } from 'emotion';

export const base = css`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);;
  display: flex;
  flex-direction: column;

  & > :not(:last-child) {
    margin-bottom: -4.39453vw;
  }
`;
