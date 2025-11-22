"use strict";

const arr = [
  [1, 2, 3],
  [10, 5, 6],
  [7, 8, 9],
];
const flatArray = arr.flat();

const max = Math.max(...flatArray);
console.log(max);
