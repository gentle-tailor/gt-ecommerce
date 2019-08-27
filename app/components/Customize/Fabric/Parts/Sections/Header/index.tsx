import styled from '@emotion/styled';

type HeaderProps = {
  align?: 'left' | 'right' | 'center';
}

const Header = styled('div')<HeaderProps>`
  text-align: ${props => props.align || 'center'};
  padding: 0 36px;
  padding-bottom: 32px;
  width: 100%;
`;

export default Header;
