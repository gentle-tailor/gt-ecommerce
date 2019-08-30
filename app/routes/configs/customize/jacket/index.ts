import * as PATHS from 'routes/paths';
import { RouteConfig } from 'types/routes';
import Root from 'containers/Routes/Customize/Jacket/Root';
import Accents from 'containers/Routes/Customize/Jacket/Accents';
import Fabric from 'containers/Routes/Customize/Jacket/Fabric';
import PathLogger from 'components/Shared/Routes/PathLogger';
import ProtectedRoute from 'components/Shared/Routes/ProtectedRoute';

const routeConfigs: RouteConfig[] = [
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE_JACKET,
      exact: true,
      component: Root,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE_JACKET_FABRIC,
      component: Fabric,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE_JACKET_STYLES,
      component: PathLogger,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE_JACKET_ACCENTS,
      component: Accents,
    },
    component: ProtectedRoute,
  },
];

export default routeConfigs;
