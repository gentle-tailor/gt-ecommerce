import { ComponentType } from 'react';
import { compose } from 'ramda';
import { combineDisplayNames } from './displayName';
import hoistStatics from 'hoist-non-react-statics';

const setStatic = (key: keyof ComponentType<any>, value: any) => (
  <P>(Component: ComponentType<P>): ComponentType<P> => {
    Component[key] = value;

    return Component;
  }
);

const setWrappedComponent = <P>(Component: ComponentType<P>) => (
  setStatic('WrappedComponent' as keyof ComponentType<P>, Component)
);

const setDisplayName = (value: string) => (
  setStatic('displayName', value)
);

export const setAndHoistStatics = <P, Q>(Hoc: ComponentType<P>, Base: ComponentType<Q>): ComponentType<P> => (
  compose(
    setWrappedComponent(Base),
    setDisplayName(combineDisplayNames(Hoc, Base))
  )(hoistStatics(Hoc, Base as ComponentType<P & Q>))
);
