import { css, cx } from 'emotion';

export const base = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  border-bottom: 2px solid;
  transition: width 0.25s;

  &:hover {
    width: 70%;
  }
`;

export const active = cx(
  base,
  css`
    width: 70%;
  `
);
