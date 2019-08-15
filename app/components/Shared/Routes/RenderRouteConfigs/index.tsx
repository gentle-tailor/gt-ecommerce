import React from 'react';
import { RouteConfig } from 'types/routes';
import RenderRouteConfig from 'components/Shared/Routes/RenderRouteConfig';

type RenderRouteConfigsProps = {
  routeConfigs: RouteConfig[];
}

const RenderRouteConfigs: React.SFC<RenderRouteConfigsProps> = ({
  routeConfigs = [],
}) => (
  <React.Fragment>
    {routeConfigs.map(routeConfig => (
      <RenderRouteConfig
        {...routeConfig}
        key={routeConfig.props.path}
      />
    ))}
  </React.Fragment>
);

export default RenderRouteConfigs;
