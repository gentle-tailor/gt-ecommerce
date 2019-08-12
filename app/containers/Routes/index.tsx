import React from 'react';
import { withRouter, Switch, RouteComponentProps } from 'react-router';
import routeConfigs from 'routes/configs';
import RenderRouteConfigs from 'components/Shared/RenderRouteConfigs';

type RootProps = (
  RouteComponentProps
);

const Routes: React.SFC<RootProps> = () => (
  <Switch>
    <RenderRouteConfigs routeConfigs={routeConfigs} />
  </Switch>
);

export default withRouter(Routes);
