import React from 'react';
import { PATH_CUSTOMIZE_PANTS_STYLES } from 'routes/paths';
import Link from 'components/Shared/Link';
import Navigation from 'components/Customize/Shared/Navigation';

const FooterNav: React.SFC = () => (
  <Navigation>
    <Navigation.Next>
      <Link to={PATH_CUSTOMIZE_PANTS_STYLES}>
        NEXT
      </Link>
    </Navigation.Next>
  </Navigation>
);

export default FooterNav;
