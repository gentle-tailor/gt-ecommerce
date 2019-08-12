import * as PATHS from 'routes/paths';
import { RouteConfig } from 'types/routes';
import accountRouteConfigs from 'routes/configs/account';
import authRouteConfigs from 'routes/configs/auth';
import customizeRouteConfigs from 'routes/configs/customize';
import infoRouteConfigs from 'routes/configs/info';
import orderRouteConfigs from 'routes/configs/order';
import shopRouteConfigs from 'routes/configs/shop';
import Account from 'containers/Routes/Account';
import Auth from 'containers/Routes/Auth';
import Customize from 'containers/Routes/Customize';
import Info from 'containers/Routes/Info';
import Order from 'containers/Routes/Order';
import Shop from 'containers/Routes/Shop';
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
      component: Account,
      routeConfigs: accountRouteConfigs,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_AUTH,
      exact: false,
      component: Auth,
      routeConfigs: authRouteConfigs,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE,
      exact: false,
      component: Customize,
      routeConfigs: customizeRouteConfigs,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_INFO,
      exact: false,
      component: Info,
      routeConfigs: infoRouteConfigs,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_ORDER,
      exact: false,
      component: Order,
      routeConfigs: orderRouteConfigs,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_SHOP,
      exact: false,
      component: Shop,
      routeConfigs: shopRouteConfigs,
    },
    component: ProtectedRoute,
  },
]

export default routeConfigs;
