import React from 'react';
import { Switch } from 'react-router';
import { RouteComponentProps } from 'types/routes';
import RenderRouteConfigs from 'components/Shared/RenderRouteConfigs';

type InfoProps = (
  RouteComponentProps
);

const Info: React.SFC<InfoProps> = ({
  routeConfigs = [],
  ...rest
}) => (
  <Switch>
    <RenderRouteConfigs routeConfigs={routeConfigs} />
  </Switch>
);

export default Info;
