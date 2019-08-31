import React from 'react';
import { Switch } from 'react-router';
import { RouteComponentProps } from 'types/routes';
import RenderRouteConfigs from 'components/Shared/Routes/RenderRouteConfigs';
import JacketComponent from 'components/Customize/Jacket';

type JacketProps = (
  RouteComponentProps
);

const Jacket: React.SFC<JacketProps> = ({
  routeConfigs = [],
  ...rest
}) => (
  <JacketComponent>
    <Switch>  
      <RenderRouteConfigs routeConfigs={routeConfigs} />
    </Switch>
  </JacketComponent>
);

export default Jacket;
