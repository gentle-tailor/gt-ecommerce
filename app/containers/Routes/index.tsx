import React from 'react';
import { withRouter, Switch, RouteComponentProps } from 'react-router';
import routeConfigs from 'routes/configs';
import RenderRouteConfigs from 'components/Shared/Routes/RenderRouteConfigs';
import PageLayout from 'components/Shared/PageLayout';

type RootProps = (
  RouteComponentProps
);

const Routes: React.SFC<RootProps> = () => (
  <PageLayout>
    <Switch>
      <RenderRouteConfigs routeConfigs={routeConfigs} />
    </Switch>
  </PageLayout>
);

export default withRouter(Routes);
