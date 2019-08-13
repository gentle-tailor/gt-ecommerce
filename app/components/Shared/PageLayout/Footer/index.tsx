import React from 'react';
import Container from 'components/Shared/Footer';
import Shell from 'components/Shared/Shell';

const Footer: React.SFC = () => (
  <React.Fragment>
    <Container>
      <Shell>
        <Shell.Block>
          <span>© 2019 GT Studios</span>
          <span>gentle@tailor.com</span>
          <span>Instagram</span>
          <span>Facebook</span>
        </Shell.Block>
      </Shell>
    </Container>
  </React.Fragment>
);

export default Footer;
