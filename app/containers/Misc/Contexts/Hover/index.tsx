import { createContext } from 'react';

export type HoverContextProviderProps = {
  children: React.ReactNode;
};

export type HoverContextRenderProps = {
  hovered: boolean;
};

export default createContext<HoverContextRenderProps>({
  hovered: false,
});
