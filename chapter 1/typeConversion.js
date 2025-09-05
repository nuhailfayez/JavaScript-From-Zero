// type conversion using constructors

// String
let num = 10;
let str = String(num); // Number → String 
console.log(str, typeof str)


// Number
let str2 = '100';
let num2 = Number(str2) // String → Number
console.log(num2, typeof num2);

// Boolean
// falsy values in javascript
let value1 = Boolean(0);
let value2 = Boolean(undefined);
let value3 = Boolean(null);
let value4 = Boolean('');
let value5 = Boolean(NaN);

console.log(value1)
console.log(value2)
console.log(value3)
console.log(value4)
console.log(value5)
