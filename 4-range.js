'use strict'

const rage = (start, end) => {
    let result = []
    for (let i = start; i <= end; i++) {
        result.push(i)
    }
    return result
}
const start = 15
const end = 30
console.log(rage(start, end))