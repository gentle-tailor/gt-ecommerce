import React from 'react';
import { Omit } from 'types/utility';
import { LevelConsumer } from 'containers/Misc/Contexts/Level';
import Heading, { HeadingProps } from 'components/Shared/Heading';

export type HeadingAutoProps = (
  Omit<HeadingProps, 'level'>
);

const HeadingAuto: React.SFC<HeadingAutoProps> = props => (
  <LevelConsumer>
    {({ level }) => (
      <Heading
        {...props}
        level={level}
      />
    )}
  </LevelConsumer>
);

export default HeadingAuto;
