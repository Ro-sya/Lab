"use strict";

function contract(fn, ...types) {
  return function (...args) {
    const resultType = types[types.length - 1];
    const argTypes = types.slice(0, -1);

    if (args.length !== argTypes.length) {
      throw new Error(
        `Expected ${argTypes.length} arguments, but got ${args.length}`
      );
    }

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const expectedType = argTypes[i];

      if (typeof arg !== expectedType.name.toLowerCase()) {
        throw new TypeError(
          `Argument ${i} should be ${expectedType.name}, but got ${typeof arg}`
        );
      }
    }
    const result = fn(...args);

    return result;
  };
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.log(res);
