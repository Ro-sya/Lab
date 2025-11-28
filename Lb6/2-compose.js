"use strict";

const compose = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== "function") {
      throw new Error("You should use only function!");
    }
  }

  const errors = [];

  const composed = (value) => {
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        value = fns[i](value);
      }
      return value;
    } catch (err) {
      errors.forEach((e) => e(err));
      return undefined;
    }
  };
  composed.on = (event, handler) => {
    if (event === "error") {
      errors.push(handler);
    }
    return composed;
  };
  return composed;
};

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

console.log(compose(inc, twice, cube)(5));
console.log(compose(inc, inc)(7));
console.log(compose(inc, 7, cube)(2));
