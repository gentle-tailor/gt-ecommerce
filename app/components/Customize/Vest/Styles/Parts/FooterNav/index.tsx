import React from 'react';
import { PATH_ORDER_CHECKOUT } from 'routes/paths';
import Link from 'components/Shared/Link';
import Navigation from 'components/Customize/Shared/Navigation';

const FooterNav: React.SFC = () => (
  <Navigation>
    <Navigation.Next>
      <Link to={PATH_ORDER_CHECKOUT}>
        TO CART
      </Link>
    </Navigation.Next>
  </Navigation>
);

export default FooterNav;
