"use strict";

function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

const array = [1, 2, 3, 4, 3, 5, 6, 7];
const arr = ["Kiev", "Beijing", "Lima", "Saratov"];

removeElement(array, 3);
console.log(array);
removeElement(arr, "Lima");
console.log(arr);
