declare module 'str-utils' {
  // export const ...
  // export function ...
  type strFun = (a: string) => string;
  export const strReverse: strFun;
  export const strToLower: strFun;
  export const strToUpper: strFun;
  export const strRandomize: strFun;
  export const strInvertCase: strFun;
}
