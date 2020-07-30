declare module 'stats' {
  type comp<T> = (a: T, b: T) => number;
  type getIndex = <T>(arr: T[], comp: comp<T>) => number;
  type getValue = <T>(arr: T[], comp: comp<T>) => T;

  export const getMaxIndex: getIndex;
  export const getMinIndex: getIndex;
  export const getMedianIndex: getIndex;

  export const getMaxElement: getValue;
  export const getMinElement: getValue;
  export const getMedianElement: getValue;
  export const getAverageValue: getValue;
}
