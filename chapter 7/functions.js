// simple function

// function sayHello(){
//     console.log('Hello world!');
// }

//  calling or invoking a function to see output
// sayHello()


// function parameters and argument
// parameters like a variable
// arguments like variables values

// function great(name){
//     console.log('Hello ' + name + ' !')
// }
// great('Nuhail Fayez')


// Function with Return Value

// function add (a, b){
//     return a + b;
// }

// let result = add(2, 10)
// console.log(result)

// Function inside Variable

//  let square = function(num){
//       return num * num
// }
// console.log(square(4))
// console.log(square(100))


// Function with Multiple Parameters
// function multiply(x, y, z){
//     return x * y * z
// }

// console.log(multiply(2, 3, 4))


// Function with Condition

// function isEven(num){
//     if(num % 2 === 0){
//         return 'Even number';
//     } else{
//         return 'Odd number';
//     }
// }

// console.log(isEven(17)) // odd number
// console.log(isEven(10)) // even number


// Function Calling Another Function
// function square(num){
//     return num * num
// }

// function cube(num){
//     return num + square(num)
// }


// console.log(cube(5))

// Function with Array
// function sumArr(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum;
// }

// console.log(sumArr([1, 2, 3, 4, 5, 6 , 7]))


// anonymous function

// let greet = function() {
//     console.log("I have no name!");
// }

// greet();


// let arr = [
//     function(a,b){return a + b},
//     function(a,b){return a - b},
//     function(a,b){return a * b},
//     function(a,b){return a / b}
// ]
// console.log(arr[0](5,3));
// console.log(arr[1](5,3));
// console.log(arr[2](5,3));
// console.log(arr[3](5,3));



// first class citizen

// Function assigned to Variable

// let greet = function(){
//     console.log('Hello from in variable!');
// };

// greet()

// Function passed as Argument

// function sayHello(){
//     console.log('Hello!')

// };

// function execute(fn){
//     fn()
// }
// execute(sayHello);


// Function returning another Function

// function outer(){
//     return function(){
//         console.log('Iam inner Function')
//     };
// }

// let inner = outer()
// inner();


// Store Function in Object

// let calculator = {
//     add: function(a,b){
//         return a + b
//     },

//     multiply: function(a,b){
//         return a * b;  
//     }
// };
// console.log(calculator.add(5,3));
// console.log(calculator.multiply(3,9));


// Store Function in Array
// let operations = [
//     function(a,b){return a + b},
//     function(a,b){return a - b},
//     function(a,b){return a * b},
// ]

// console.log(operations[0](10,5));
// console.log(operations[1](10,5));
// console.log(operations[2](10,5));



// pass by value

// Simple Pass-By-Value
// let a = 10
// let b = a;

// b = 20;
// console.log(a);
// console.log(b);

// pass by value with string

// let name1 = 'Nuhail';
// let name2 = name1;

// name2 = 'Fayez'

// console.log(name1)
// console.log(name2)


// Recursive functions

// function hello(number){
//     if(number === 0) return;
//     console.log(number)
//     hello(number - 1)
// }

// hello(10)


// Default parameters :-

// function mySelf(a = 'Nuhail'){
//     console.log(a)
// }

// mySelf('Fayez')

