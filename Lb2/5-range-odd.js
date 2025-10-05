'use strict'

const rangeodd = (start, end) => {
    let result = []
    for (let i = start; i <= end; i++) {
        if ( i %2 !==0 ) {
            result.push(i)
        }
    }
    return result
}
const start = 15
const end = 30
console.log(rangeodd(start, end))
