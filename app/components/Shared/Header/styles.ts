import { css } from 'emotion';
import { zIndex } from 'styles/constants';

export const base = css`
  z-index: ${zIndex.header};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 10px 0 0 0;
  background-color: #fff;
`;
