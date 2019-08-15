import React from 'react';
import { Switch } from 'react-router';
import { RouteComponentProps } from 'types/routes';
import RenderRouteConfigs from 'components/Shared/Routes/RenderRouteConfigs';

type EditorialsProps = (
  RouteComponentProps
);

const Editorials: React.SFC<EditorialsProps> = ({
  routeConfigs = [],
  ...rest
}) => (
  <Switch>
    <RenderRouteConfigs routeConfigs={routeConfigs} />
  </Switch>
);

export default Editorials;
