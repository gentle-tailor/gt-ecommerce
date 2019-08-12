import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { RouteConfig } from 'types/routes';

export type RenderRouteConfigProps = (
  RouteConfig
)

const RenderRouteConfig: React.SFC<RenderRouteConfigProps> = ({
  component: Route,
  props: {
    component: Component,
    routeConfigs,
    ...routeProps
  }
}: RenderRouteConfigProps) => {
  const renderComponent = (componentProps: RouteComponentProps) => (
    <Component
      {...componentProps}
      routeConfigs={routeConfigs}
    />
  )

  return (
    <Route
      {...routeProps}
      status="valid"
      redirectUrl="/"
      render={renderComponent}
    />
  );
};

export default RenderRouteConfig;
