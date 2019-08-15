import * as PATHS from 'routes/paths';
import { RouteConfig } from 'types/routes';
import PathLogger from 'components/Shared/Routes/PathLogger';
import ProtectedRoute from 'components/Shared/Routes/ProtectedRoute';

const routeConfigs: RouteConfig[] = [
  {
    props: {
      path: PATHS.PATH_EDITORIALS,
      exact: true,
      component: PathLogger,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_EDITORIALS_ENTRY,
      component: PathLogger,
    },
    component: ProtectedRoute,
  },
];

export default routeConfigs;
