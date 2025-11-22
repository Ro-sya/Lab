"use strict";

const num = (...arg) => {
  let sum = 0;
  while (arg.length > 0) {
    sum += arg.shift();
  }
  return sum;
};

console.log(num(1, 2, 3, 4, 5));
