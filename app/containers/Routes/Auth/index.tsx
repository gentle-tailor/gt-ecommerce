import React from 'react';
import { Switch } from 'react-router';
import { RouteComponentProps } from 'types/routes';
import RenderRouteConfigs from 'components/Shared/RenderRouteConfigs';

type AuthProps = (
  RouteComponentProps
);

const Auth: React.SFC<AuthProps> = ({
  routeConfigs = [],
  ...rest
}) => (
  <Switch>
    <RenderRouteConfigs routeConfigs={routeConfigs} />
  </Switch>
);

export default Auth;
