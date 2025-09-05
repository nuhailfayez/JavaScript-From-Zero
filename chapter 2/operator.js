// All About JavaScript Operator

// *** Arithmetic Operators
// let a = 10;
// let b = 3;
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a ** b)
// console.log(a / b)
// console.log(a % b)

// *** Assignment Operators
// let x = 10;
// let y = 30;
// x += y // x =  x + y
// console.log(x)


// let x =  10;
// x += 5 // this means x = x + 5 = 10 + 5 = 15
// x -= 5
// x *= 3
// x /= 2
// console.log(x)


// *** Unary Operators :-

let str = '10';
let num = +str;  //Convert a value into a number
console.log(num)


let str2 = '100';
let num2 = -str2; // Convert a value into a number and negate it
console.log(num2)

// *** Increment Operator or Decrement Operator
let i = 10;
// i++;
// ++i
// i--;
// --i
// console.log(i)



// *** Comparison Operators

let a = 14;
let b = '14';
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);

let check = false;
console.log(!check);

let x = 10;
let y = 10;
console.log(x < y)
console.log(y < x)
console.log(x >= y)


// *** Logical Operators

// && , || , !

let age = 16;
let citizen = 'Bangladeshi';

console.log(age >= 18 && citizen === 'Bangladeshi');
console.log(age >= 18 || citizen === 'Bangladeshi');
console.log(!(age >= 18));

// *** Ternary Operator

//condition ? true side : false side;

let myAge = 18;
let result = myAge >= 18 ? 'Adult' : 'Child';
console.log(result)

// multiple 
let speed = 90
let message = speed >= 120 ? 'Too Fast' : speed >=90 ? 'Fast' : 'Ok';
console.log(message)