import React from 'react';
import { RouteComponentProps } from 'types/routes';
import Conditional from 'components/Shared/Conditional';
import Label from './Label';

type PathLoggerProps = (
  RouteComponentProps
);

const PathLogger: React.SFC<PathLoggerProps> = ({
  location: {
    state = {},
  }
}) => (
  <div>
    <Label>
      {`Current path: ${location.pathname}`}
    </Label>
    <Conditional render={state.from}>
      <Label>
        {`Redirected from: ${JSON.stringify(state.from)}`}
      </Label>
    </Conditional>
  </div>
);

export default PathLogger;
