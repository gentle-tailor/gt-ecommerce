import React from 'react';
import { RouteComponentProps } from 'types/routes';
import Render from 'components/Shared/Render';
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
    <Render when={state.from}>
      <Label>
        {`Redirected from: ${JSON.stringify(state.from)}`}
      </Label>
    </Render>
  </div>
);

export default PathLogger;
