"use strict";

function removeElement(array, ...items) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (items.includes(array[i])) {
      array.splice(i, 1);
    }
  }
}

const array = [1, 2, 3, 4, 3, 5, 6, 7];
const arr = ["Kiev", "Beijing", "Lima", "Saratov"];

removeElement(array, 3, 4, 5);
console.log(array);
removeElement(arr, "Lima", "Beijing");
console.log(arr);
