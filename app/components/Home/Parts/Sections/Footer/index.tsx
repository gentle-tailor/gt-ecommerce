import styled from '@emotion/styled';

type FooterProps = {
  align?: 'left' | 'right' | 'center';
}

const Footer = styled('div')<FooterProps>`
  text-align: ${props => props.align || 'center'};
  padding: 0 36px;
  padding-top: 32px;
  width: 100%;
`;

export default Footer;
