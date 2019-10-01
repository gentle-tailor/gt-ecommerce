export type Omit<T, K extends keyof T> = (
  Pick<T, Exclude<keyof T, K>>
);

export type Subtract<T extends U, U> = (
  Omit<T, keyof U>
);
