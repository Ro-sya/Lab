'use strict'

const ipToInt = (ip = '127.0.0.1') => {
    const p = ip.split ('.')
    if (p.length !== 4) {
        throw new Error ('Incorrect IP')
    }
    return p.reduce ((res, octet) => (res << 8) + (+octet & 255), 0)
}
console.log(ipToInt())