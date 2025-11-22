"use strict";

const num = (...arg) => {
  let sum = 0;
  for (let i = 0; i < arg.length; i++) {
    sum += arg[i];
  }
  return sum;
};

console.log(num(1, 2, 3));
