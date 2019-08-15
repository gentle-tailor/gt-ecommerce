import * as React from 'react';
import { Route, Redirect } from 'react-router';
import { RouteProps, RouteComponentProps } from 'types/routes';

type MemoryRedirectProps = (
  RouteProps
);

const MemoryRedirect: React.SFC<MemoryRedirectProps> = ({
  redirectUrl,
  component,
  render,
  children,
  ...rest
}) => {
  const renderRedirect = ({ location }: RouteComponentProps) => {
    const to = {
      pathname: redirectUrl,
      state: { from: location },
    };

    return <Redirect to={to} />;
  };

  return (
    <Route
      {...rest}
      render={renderRedirect}
    />
  );
};

export default MemoryRedirect;
