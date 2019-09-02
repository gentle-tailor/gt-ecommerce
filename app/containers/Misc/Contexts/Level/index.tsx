import { createContext } from 'react';

export type LevelContextRenderProps = {
  level: number;
};

export default createContext<LevelContextRenderProps>({
  level: 2,
});
