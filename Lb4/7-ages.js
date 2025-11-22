"use strict";

const persons = {
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

const ages = (persons) => {
  const result = {};

  for (const name in persons) {
    const person = persons[name];
    result[name] = person.died - person.born;
  }

  return result;
};

console.log(ages(persons));
