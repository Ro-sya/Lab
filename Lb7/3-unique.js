"use strict";

function unique(array) {
  return array.filter((element, i) => array.indexOf(element) == i);
}

const array = [1, 2, 3, 4, 3, 2, 2, 1];
const arr = ["top", "bottom", "top", "left"];

console.log(unique(array));
console.log(unique(arr));
