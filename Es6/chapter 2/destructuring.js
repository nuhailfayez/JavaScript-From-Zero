const person = {
    firstName: 'Nuhail',
    lastName: 'Fayez',
    age: 20,
    prof: 'Content Creator'
}

let {firstName, lastName, prof= 'Programmer'} = person;
console.log(firstName)
console.log(lastName)
console.log(prof)


// string Destructuring

let str = 'Welcome to The Programming World';
let[a, b, c, d, e, f] = str;
console.log(a,b,c)


let fruits = ['Apple', 'Banana', 'Lemon', 'Mangos'];
let [fruits1, fruits2, fruits3] = fruits;

console.log(fruits1)