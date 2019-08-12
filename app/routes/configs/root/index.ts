import * as PATHS from 'routes/paths';
import { RouteConfig } from 'types/routes';
import accountRouteConfigs from 'routes/configs/account';
import authRouteConfigs from 'routes/configs/auth';
import customizeRouteConfigs from 'routes/configs/customize';
import infoRouteConfigs from 'routes/configs/info';
import orderRouteConfigs from 'routes/configs/order';
import shopRouteConfigs from 'routes/configs/shop';
import PathLogger from 'components/Shared/PathLogger';
import ProtectedRoute from 'components/Shared/ProtectedRoute';

const routeConfigs: RouteConfig[] = [
  {
    props: {
      path: PATHS.PATH_ROOT,
      exact: true,
      component: PathLogger,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_ACCOUNT,
      exact: false,
      component: PathLogger,
      routeConfigs: accountRouteConfigs,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_AUTH,
      exact: false,
      component: PathLogger,
      routeConfigs: authRouteConfigs,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE,
      exact: false,
      component: PathLogger,
      routeConfigs: customizeRouteConfigs,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_INFO,
      exact: false,
      component: PathLogger,
      routeConfigs: infoRouteConfigs,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_ORDER,
      exact: false,
      component: PathLogger,
      routeConfigs: orderRouteConfigs,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_SHOP,
      exact: false,
      component: PathLogger,
      routeConfigs: shopRouteConfigs,
    },
    component: ProtectedRoute,
  },
]

export default routeConfigs;
