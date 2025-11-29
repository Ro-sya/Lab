"use strict";

function difference(array1, array2) {
  return array1.filter((element) => !array2.includes(element));
}

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);
