// var , let , const

var x = 10; // old variable declaration
x = 20; // can be reassign
var x = 100; // can be redeclare
console.log(x)

{

   var myInfo = 'To buy a BMW';  // var function scoped or global scoped

} 
console.log(myInfo)
    

let y = 5; // modern variables declaration
y = 25; // can be reassign
// let y = 1000 // but can't be redeclare
console.log(y)


{
   let y = 700;
   console.log(y) // output: 700
}

// console.log(y) // output: 25



const z = 50; // constant variable
// z = 14    // can't be reassign
// const z = 75 //can't be redeclare
console.log(z)
