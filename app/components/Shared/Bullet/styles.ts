import { css, cx } from 'emotion';

export const base = css`
  cursor: pointer;
  width: 8px;
  height: 8px;
  opacity: 0.4;
  border-radius: 50%;
  background: rgb(244,246,247);
  background: linear-gradient(130deg, rgba(244,246,247,1) 12%, rgba(199,191,191,1) 100%);
  transition: all 0.3s ;
`;

export const active = cx(
  base,
  css`
    width: 10px;
    height: 10px;
    opacity: 1;
  `
);
