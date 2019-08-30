import * as PATHS from 'routes/paths';
import { RouteConfig } from 'types/routes';
import jacketRouteConfigs from './jacket';
import pantsRouteConfigs from './pants';
import Root from 'containers/Routes/Customize/Root';
import Jacket from 'containers/Routes/Customize/Jacket';
import Pants from 'containers/Routes/Customize/Pants';
import PathLogger from 'components/Shared/Routes/PathLogger';
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
      path: PATHS.PATH_CUSTOMIZE_JACKET,
      component: Jacket,
      routeConfigs: jacketRouteConfigs,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE_PANTS,
      component: Pants,
      routeConfigs: pantsRouteConfigs,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE_VEST,
      component: PathLogger,
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
