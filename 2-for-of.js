"use strict";

const num = (...arg) => {
  let sum = 0;
  for (const value of arg) {
    sum += value;
  }
  return sum;
};

console.log(num(1, 2, 3, 4, 5));
