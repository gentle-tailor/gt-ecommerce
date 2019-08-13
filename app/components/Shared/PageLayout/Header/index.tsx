import React from 'react';
import Container from 'components/Shared/Header';
import Shell from 'components/Shared/Shell';

const Header: React.SFC= () => (
  <Container>
    <Shell>
      <Shell.Block>
        <span>SHOP</span>
        <span>INFO</span>
        <span>EN</span>
      </Shell.Block>
    </Shell>
  </Container>
);

export default Header;
