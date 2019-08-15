import React from 'react';
import { Redirect } from 'react-router';
import { RouteComponentProps } from 'types/routes';
import { PATH_CUSTOMIZE_FABRIC } from 'routes/paths';

const Root: React.SFC<RouteComponentProps> = () => (
  <Redirect to={PATH_CUSTOMIZE_FABRIC} />
);

export default Root;
