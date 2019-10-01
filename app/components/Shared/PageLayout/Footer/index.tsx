import React from 'react';
import Slide from 'components/Shared/Transitions/SlidePseudo';
import Container from 'components/Shared/Footer';
import Text from 'components/Shared/Text';
import Shell from 'components/Shared/Shell';
import LinkExternal from 'components/Shared/LinkExternal';

const Footer: React.SFC = () => (
  <React.Fragment>
    <Container>
      <Shell>
        <Shell.Block>
          <Slide
            status="mounting"
            directionIn="down"
            directionOut="down"
            duration={800}
            stagger={75}
          >
            <Text>
              © 2019 GT Studios
            </Text>
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
          </Slide>
        </Shell.Block>
      </Shell>
    </Container>
  </React.Fragment>
);

export default Footer;
