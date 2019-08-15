import React from 'react';
import { Switch } from 'react-router';
import { RouteComponentProps } from 'types/routes';
import RenderRouteConfigs from 'components/Shared/Routes/RenderRouteConfigs';
import CustomizeComponent from 'components/Customize';

type CustomizeProps = (
  RouteComponentProps
);

const Customize: React.SFC<CustomizeProps> = ({
  routeConfigs = [],
  ...rest
}) => (
  <CustomizeComponent>
    <Switch>  
      <RenderRouteConfigs routeConfigs={routeConfigs} />
    </Switch>
  </CustomizeComponent>
);

export default Customize;
