"use strict";

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== "function") {
      throw new Error("You should use only function!");
    }
  }
  return (x) => fns.reduce((acc, fn) => fn(acc), x);
};

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

console.log(pipe(inc, twice, cube)(5));
console.log(pipe(inc, inc)(7));
console.log(pipe(inc, 7, cube)(2));
