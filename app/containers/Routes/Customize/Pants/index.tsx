import React from 'react';
import { Switch } from 'react-router';
import { RouteComponentProps } from 'types/routes';
import RenderRouteConfigs from 'components/Shared/Routes/RenderRouteConfigs';
import PantsComponent from 'components/Customize/Pants';

type PantsProps = (
  RouteComponentProps
);

const Pants: React.SFC<PantsProps> = ({
  routeConfigs = [],
  ...rest
}) => (
  <PantsComponent>
    <Switch>
      <RenderRouteConfigs routeConfigs={routeConfigs} />
    </Switch>
  </PantsComponent>
);

export default Pants;
