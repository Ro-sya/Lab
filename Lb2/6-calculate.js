'use strict'

const avarage = (m, n) =>  (m + n) / 2
const square = (x) => x * x
const cube = (x) => x * x * x

const calculate = () => {
    const cal = []
    for (let i = 0; i <= 9; i++) {
        const sq = square(i)
        const cb = cube(i)
        const av = avarage(sq, cb)

        cal.push(av)
    }
    return cal
}

console.log(calculate())
