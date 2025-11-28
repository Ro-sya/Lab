"use strict";

function array() {
  const ch = [];

  const arr = (index) => ch[index];
  arr.push = (value) => ch.push(value);
  arr.pop = () => ch.pop();

  return arr;
}

const arr = array();

arr.push("first");
arr.push("second");
arr.push("third");

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());
