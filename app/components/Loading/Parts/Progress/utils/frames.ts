export const progressUncached = [
  0,
  32,
  45,
  68,
  98,
  100,
];

export const progressCached = [
  0,
  61,
  100,
];

export const tick = (frames: number[]) => {
  let i = 0;

  return () => (
    i >= frames.length - 1
      ? frames[i]
      : frames[i++]
  );
};
