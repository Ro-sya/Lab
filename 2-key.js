'use strict'

const generateKey = (lenght, characters) => {
    let key = ''
    const charactersLength = characters.length
    for ( let i = 0; i < lenght; i++) {
        const rdIndex = Math.floor(Math.random() * charactersLength)
        key += characters.charAt(rdIndex)
    }
    return key
}

console.log(generateKey(7, 'ABCDEF0123456789'))