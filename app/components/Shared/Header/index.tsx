import styled from '@emotion/styled';
import { zIndex } from 'styles/constants';

const Header = styled('header')`
  z-index: ${zIndex.header};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 10px 0 0 0;
  background-color: #fff;
`;

export default Header;
