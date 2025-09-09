'use strict'
const person = {
    firstName : 'Nuhail',
    lastName: 'Fayez',
    age: 20,
    fullName: function(){
        return this.firstName + ' ' + this.lastName
    }
}

console.log(person.fullName())


// global obj

console.log(typeof this)

// function under global obj

function sayHi(){
    console.log(typeof this)
}

sayHi()