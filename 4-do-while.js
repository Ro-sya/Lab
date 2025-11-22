"use strict";

const num = (...arg) => {
  let sum = 0;
  do {
    sum += arg.shift();
  } while (arg.length > 0);
  return sum;
};

console.log(num(1, 2, 3, 4, 5));
