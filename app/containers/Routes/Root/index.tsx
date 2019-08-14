import React from 'react';
import { RouteComponentProps } from 'types/routes';
import Home from 'components/Home';

type RootProps = (
  RouteComponentProps
);

const Root: React.SFC<RootProps> = () => (
  <Home />
);

export default Root;
