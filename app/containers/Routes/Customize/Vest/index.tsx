import React from 'react';
import { Switch } from 'react-router';
import { RouteComponentProps } from 'types/routes';
import RenderRouteConfigs from 'components/Shared/Routes/RenderRouteConfigs';
import VestComponent from 'components/Customize/Vest';

type VestProps = (
  RouteComponentProps
);

const Vest: React.SFC<VestProps> = ({
  routeConfigs = [],
  ...rest
}) => (
  <VestComponent>
    <Switch>  
      <RenderRouteConfigs routeConfigs={routeConfigs} />
    </Switch>
  </VestComponent>
);

export default Vest;
