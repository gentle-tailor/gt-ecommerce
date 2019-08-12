import React from 'react';
import { Switch } from 'react-router';
import { RouteComponentProps } from 'types/routes';
import RenderRouteConfigs from 'components/Shared/RenderRouteConfigs';

type OrderProps = (
  RouteComponentProps
);

const Order: React.SFC<OrderProps> = ({
  routeConfigs = [],
  ...rest
}) => (
  <Switch>
    <RenderRouteConfigs routeConfigs={routeConfigs} />
  </Switch>
);

export default Order;
