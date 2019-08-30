import { createContext } from 'react';

export type CountContextProviderProps = {
  children: React.ReactNode;
}

export type CountContextRenderProps = {
  count: number;
};

export default createContext<CountContextRenderProps>({
  count: 0,
})