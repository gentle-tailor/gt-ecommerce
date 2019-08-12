import React from 'react';
import { Switch } from 'react-router';
import { RouteComponentProps } from 'types/routes';
import RenderRouteConfigs from 'components/Shared/RenderRouteConfigs';

type ShopProps = (
  RouteComponentProps
);

const Shop: React.SFC<ShopProps> = ({
  routeConfigs = [],
  ...rest
}) => (
  <Switch>
    <RenderRouteConfigs routeConfigs={routeConfigs} />
  </Switch>
);

export default Shop;
