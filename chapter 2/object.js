// All About JavaScript Object

// let empty = {

// }


let person ={
    firstName: 'Nuhail',
    lastName: 'Fayez',
    age: 19
}

console.log(person.firstName, person.lastName); // the dot notation
console.log(person['firstName'], person['lastName']) // array-like notation

person.age = 16; // modifying the value of property
person.number = +1122334455; // adding a new property to an object
delete person.age
delete person.number
console.log(person) 
console.log('firstName' in person) // checking if a property exists
console.log('age' in person)