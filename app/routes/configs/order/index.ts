import * as PATHS from 'routes/paths';
import { RouteConfig } from 'types/routes';
import PathLogger from 'components/Shared/PathLogger';
import ProtectedRoute from 'components/Shared/ProtectedRoute';

const routeConfigs: RouteConfig[] = [
  {
    props: {
      path: PATHS.PATH_ORDER,
      component: PathLogger,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_ORDER_CHECKOUT,
      component: PathLogger,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_ORDER_CONFIRM,
      component: PathLogger,
    },
    component: ProtectedRoute,
  },
];

export default routeConfigs;
