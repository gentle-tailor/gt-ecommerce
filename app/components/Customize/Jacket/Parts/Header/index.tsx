import styled from '@emotion/styled';

type HeaderProps = {
  children: React.ReactNode;
};

const Header = styled('div')<HeaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
`;

export default Header;
