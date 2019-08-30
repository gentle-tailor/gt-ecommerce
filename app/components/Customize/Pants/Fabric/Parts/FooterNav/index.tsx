import React from 'react';
import { PATH_CUSTOMIZE_PANTS_FABRIC } from 'routes/paths';
import Link from 'components/Shared/Link';
import Navigation from 'components/Customize/Shared/Navigation';

const FooterNav: React.SFC = () => (
  <Navigation>
    <Navigation.Next>
      <Link to={PATH_CUSTOMIZE_PANTS_FABRIC}>
        NEXT
      </Link>
    </Navigation.Next>
  </Navigation>
);

export default FooterNav;
