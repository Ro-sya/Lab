'use strict'

const phonebook = {
    Rosya: "123-456-7890",
    Furine: "987-654-3210",
    Luna: "555-555-5555"
}

const findPhoneByName = (name) => {
    return phonebook[name] || "Not found"
}

console.log(findPhoneByName("Furine"))
console.log(findPhoneByName("Lumine"))
console.log(findPhoneByName("Rosya"))