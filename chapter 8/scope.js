// 

let say = 'Hi' // global scope 

function sayHi(){
    let sayhi = 'message'; // function scope // block scope
}


{
    let sayHello = 'message sent'; // block scope
    console.log(sayHello)
}

console.log(say)
// console.log(sayhi) // error
// console.log(sayHello) // error