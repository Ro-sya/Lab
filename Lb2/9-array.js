'use strict'

const phonebooks = [
    { name: "Rosya", phone: "123-456-7890" },
    { name: "Furine", phone: "987-654-3210" },
    { name: "Luna", phone: "555-555-5555" }
]

const FindPhoneByName = (name) => {
    for (const entry of phonebooks) {
        if (entry.name === name) {
            return entry.phone
        } 
    }   
    return "Not found"
}
console.log(FindPhoneByName("Furine"))
console.log(FindPhoneByName("Lumine")) 
console.log(FindPhoneByName("Rosya"))
