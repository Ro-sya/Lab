'use strict'

const inc = (obj) => {
    obj.x += 5
}

const obj = { x: 7 }
inc(obj)
console.log(obj);