import styled from '@emotion/styled';

type HeaderProps = {
  children: React.ReactNode;
};

const Header = styled('div')<HeaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 40px;
  width: 100%;
`;

export default Header;
