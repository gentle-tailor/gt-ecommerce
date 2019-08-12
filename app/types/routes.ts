import {
  StaticContext,
  RouteProps as InnerRouteProps,
  RouteComponentProps as InnerRouteComponentProps,
} from 'react-router';

export type RouteComponentProps<
  P = Record<string, any>,
  C = StaticContext,
  S = any
> = (
  InnerRouteComponentProps<
    P,
    C,
    S
  > &
  {
    routeConfigs?: RouteConfig[];
  }
);

export type RouteProps = (
  InnerRouteProps &
  RouteFilterPayload &
  {
    path: string;
    component: React.ComponentType<any>;
    routeConfigs?: RouteConfig[];
  }
);

export type RouteConfig = {
  filter?: RouteFilter;
  component: React.ComponentType<RouteProps>
  props: Pick<RouteProps,
    'path' |
    'exact' |
    'component' |
    'routeConfigs'
  >;
};

export type RouteFilter<S = any> = (
  (state: S) => RouteFilterPayload
);

export type RouteFilterPayload = {
  status: 'valid' | 'invalid' | 'loading';
  redirectUrl: string;
};
