import React from 'react';

export type CountContextProviderProps = {
  children: React.ReactNode;
}

export type CountContextRenderProps = {
  count: number;
};

const CountContext= React.createContext<CountContextRenderProps>({
  count: 0,
});

export {
  CountContext,
};
