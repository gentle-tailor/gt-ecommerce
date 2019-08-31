import * as PATHS from 'routes/paths';
import { RouteConfig } from 'types/routes';
import Root from 'containers/Routes/Customize/Vest/Root';
import Styles from 'containers/Routes/Customize/Vest/Styles';
import ProtectedRoute from 'components/Shared/Routes/ProtectedRoute';

const routeConfigs: RouteConfig[] = [
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE_VEST,
      exact: true,
      component: Root,
    },
    component: ProtectedRoute,
  },
  {
    props: {
      path: PATHS.PATH_CUSTOMIZE_VEST_STYLES,
      component: Styles,
    },
    component: ProtectedRoute,
  },
];

export default routeConfigs;
