import { createContext } from 'react';

export type LevelContextRenderProps = {
  level: number;
}

const {
  Provider: LevelProvider,
  Consumer: LevelConsumer,
} = createContext<LevelContextRenderProps>({
  level: 2,
});

export {
  LevelProvider,
  LevelConsumer,
};
