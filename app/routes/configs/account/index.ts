import * as PATHS from 'routes/paths';
import { RouteConfig } from 'types/routes';
import PathLogger from 'components/Shared/PathLogger';
import ProtectedRoute from 'components/Shared/ProtectedRoute';

const routeConfigs: RouteConfig[] = [
  {
    props: {
      path: PATHS.PATH_ACCOUNT,
      component: PathLogger,
    },
    component: ProtectedRoute,
  },
];

export default routeConfigs;
