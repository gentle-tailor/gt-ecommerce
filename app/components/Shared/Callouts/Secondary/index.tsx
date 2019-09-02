import React from 'react';
import * as R from 'ramda';
import Container from './Container';
import Meta, { isMeta } from './Meta';
import Media, { isMedia } from './Media';

type SecondaryProps = {
  children: React.ReactNode;
};

const alignment = ([x, y]: React.ReactNode[]) => ([
  R.cond([
    [R.either(isMeta, isMedia), _x => React.cloneElement(_x, { align: 'left' })],
    [R.T, R.identity],
  ])(x),
  R.cond([
    [R.either(isMeta, isMedia), _y => React.cloneElement(_y, { align: 'right' })],
    [R.T, R.identity],
  ])(y),
]);

const alignChildren = R.compose(
  alignment,
  R.take<React.ReactNode>(2)
);

const Secondary: React.SFC<SecondaryProps> = ({
  children,
}) => (
  <Container>
    {alignChildren(React.Children.toArray(children))}
  </Container>
);

export default Object.assign(
  Secondary,
  {
    Meta,
    Media,
  }
);
