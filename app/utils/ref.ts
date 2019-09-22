import { RefObject, createRef } from 'react';

export const createRefMap = () => (
  ((refMap: Map<any, RefObject<any>>) => ({
    length: () => (
      refMap.size
    ),
    get: (id: any) => (
      refMap.has(id)
        ? refMap.get(id)
        : refMap.set(id, createRef()).get(id)
    ),
    flatten: () => (
      Array.from(refMap.values()).reduce(
        (acc, ref) => (
          ref.current
            ? acc.concat(ref.current)
            : acc
        ),
        []
      )
    ),
  }))(new Map<any, RefObject<any>>())
);