import React from 'react';
import { Omit } from 'types/utility';
import Level from 'containers/Misc/Contexts/Level';
import Heading, { HeadingProps } from 'components/Shared/Heading';

export type HeadingAutoProps = (
  Omit<HeadingProps, 'level'>
);

const HeadingAuto: React.SFC<HeadingAutoProps> = props => (
  <Level.Consumer>
    {({ level }) => (
      <Heading
        {...props}
        level={level}
      />
    )}
  </Level.Consumer>
);

export default HeadingAuto;
