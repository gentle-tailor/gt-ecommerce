const getDisplayName = (Component: React.ComponentType<any>): string => (
  Component.displayName || Component.name || 'Component'
);

/* tslint:disable prefer-array-literal */
export const combineDisplayNames = (...Components: Array<React.ComponentType<any>>): string => (
  Components.reduce(
    (acc, Component) => `${acc}${getDisplayName(Component)}`,
    ''
  )
);
