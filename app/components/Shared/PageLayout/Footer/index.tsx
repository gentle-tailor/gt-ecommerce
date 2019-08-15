import React from 'react';
import Container from 'components/Shared/Footer';
import Shell from 'components/Shared/Shell';
import LinkExternal from 'components/Shared/LinkExternal';

const Footer: React.SFC = () => (
  <React.Fragment>
    <Container>
      <Shell>
        <Shell.Block>
          <span>© 2019 GT Studios</span>
          <LinkExternal
            href="mailto:gentle@tailor.com"
          >
            gentle@tailor.com
          </LinkExternal>
          <LinkExternal
            href="https://instagram.com"
            target="_blank"
          >
            Instagram
          </LinkExternal>
          <LinkExternal
            href="https://facebook.com"
            target="_blank"
          >
            Facebook
          </LinkExternal>
        </Shell.Block>
      </Shell>
    </Container>
  </React.Fragment>
);

export default Footer;
