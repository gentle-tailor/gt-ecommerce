import { useCallback, useState } from 'react';

type HookPayload = [
  boolean,
  {
    onHoverOver: () => void;
    onHoverOut: () => void;
  },
];

const useHover = (): HookPayload => {
  const [
    hovered,
    setHovered,
  ] = useState(false);

  return [
    hovered,
    {
      onHoverOver: useCallback(
        () => setHovered(true),
        [hovered]
      ),
      onHoverOut: useCallback(
        () => setHovered(false),
        [hovered]
      )
    }
  ]
};

export default useHover;
