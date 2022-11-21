import * as memoizee from "memoizee";

export function memoize() {
  return function (_target: any, _key: any, descriptor: any) {
    const oldFunction = descriptor.value;
    const newFunction = memoizee(oldFunction);
    descriptor.value = function () {
      return newFunction.apply(this, arguments);
    };
  };
}
