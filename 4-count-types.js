'use strict';

const array = [ 'hello' , 'world' , 2024  , true , null , -200 , 'JavaScript' , false , 3.14 ] 
const typeCounts = { number : 0 , string : 0 , boolean : 0 , object : 0 } 
for (const element of array) {
    const type = typeof element;
    if (!(type in typeCounts)) {
        typeCounts[type] = 0;
    }
    typeCounts[type] += 1;
}
console.dir(typeCounts);