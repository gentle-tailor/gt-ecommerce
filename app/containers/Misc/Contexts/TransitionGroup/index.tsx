import { createContext } from 'react';

export type TransitionGroupProviderProps = {
  children: React.ReactNode;
};

export type TransitionGroupRenderProps = {
  in: boolean;
};

export default createContext<TransitionGroupRenderProps>({
  in: false,
});
