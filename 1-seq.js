"use atrict";

function seq(f) {
  const func = [f];

  function ch(arg) {
    if (typeof arg === "function") {
      func.push(arg);
      return ch;
    }

    return func.reduceRight((acc, fn) => fn(acc), arg);
  }
  return ch;
}

console.log(seq((x) => x + 7)((x) => x * 2)(5));
console.log(seq((x) => x * 2)((x) => x + 7)(5));
console.log(seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7));
