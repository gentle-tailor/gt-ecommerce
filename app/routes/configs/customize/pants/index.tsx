import * as PATHS from 'routes/paths';
import { RouteConfig } from 'types/routes';
import Root from 'containers/Routes/Customize/Pants/Root';
import Fabric from 'containers/Routes/Customize/Pants/Fabric';
import Styles from 'containers/Routes/Customize/Pants/Styles';
import ProtectedRoute from 'components/Shared/Routes/ProtectedRoute';

const routeConfigs: RouteConfig[] = [
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE_PANTS,
      exact: true,
      component: Root,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE_PANTS_FABRIC,
      component: Fabric,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE_PANTS_STYLES,
      component: Styles,
    },
    component: ProtectedRoute,
  },
];

export default routeConfigs;
