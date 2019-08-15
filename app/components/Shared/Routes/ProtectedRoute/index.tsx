import * as R from 'ramda';
import React from 'react';
import { Route } from 'react-router';
import { RouteProps } from 'types/routes';
import MemoryRedirect from 'components/Shared/Routes/MemoryRedirect';

type ProtectedRouteProps = (
  RouteProps
);

const ProtectedRoute = React.memo<ProtectedRouteProps>(
  props => (
    (props.status || 'valid') === 'valid'
      ? <Route {...props} />
      : <MemoryRedirect {...props} />
  ),
  R.useWith(R.equals, [
    R.prop('location'),
    R.prop('location')
  ])
);

export default ProtectedRoute;
