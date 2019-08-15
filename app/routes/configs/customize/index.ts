import * as PATHS from 'routes/paths';
import { RouteConfig } from 'types/routes';
import Root from 'containers/Routes/Customize/Root';
import ProtectedRoute from 'components/Shared/Routes/ProtectedRoute';

const routeConfigs: RouteConfig[] = [
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE,
      exact: true,
      component: Root,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE_FABRIC,
      component: () => null,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE_STYLE,
      component: () => null,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE_ACCENT,
      component: () => null,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE_CONFIRM,
      component: () => null,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE_MEASUREMENT,
      component: () => null,
    },
    component: ProtectedRoute,
  },
];

export default routeConfigs;
