// 1. for loop :-

// for (initializer; condition; iterator) {
//     // statements
// }

// for (; ;){

// }

// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }

// even number
// for (let i= 0; i <= 10; i += 2){
//     console.log(i)
// }

// odd number
// for (let i = 1; i <= 10; i += 2){
//     console.log(i)
// }

// array iterate
// const arr = ['apple', 'Kiwi', 'Lemon', 'Banana', 'Mango']
// for(let i = 0; i < arr.length; i++){
//    console.log(arr[i]);
// }

// using break

// for (let i = 0; i < 10; i++){
//     if(i === 8) break;
//     console.log(i)
// }

// using continue : like skip something when looping

// for( let i = 1; i <= 7; i++){
//     if(i === 3) continue;
//     console.log(i)
// }

// odd number print using continue

// for (let i = 1; i <= 10; i++){
//      if(i % 2 === 0) continue;
//      console.log(i)
// } 


// const fruits = ['apple', 'banana', 'mango', 'orange'];

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === 'banana') continue;
//     console.log(fruits[i]);
// }


// array form range using for loop
// const range = [];
// for(let i = 1; i <= 5; i++){
//     range.push(i)
// }
// console.log(range)


// 2. while loop
// let i = 0;
// while (i < 5){
//     console.log(i)
//     i++;
// }

// let num = 2;
// while(num <= 10){
//     console.log(num);
//     num += 2
// }

// 1 to 5 addition
// let i = 1;
// let sum = 0;
// while(i <= 5){
//     sum += i
//     i++
// }
// console.log('Total sum =', sum)


// let i = 5;
// while( i >= 1){
//     console.log(i);
//     i--;
// }

// break in while loop

// let i = 1;
// while (i <= 100){
//     if(i === 80){
//         break;
//     }
//     console.log(i)
//     i++
// }

// continue
// let i = 0;
// while(i < 10){
//     i++;
//     if(i % 2 === 0){
//         continue; //even number skip
//     }
//     console.log(i)
// }

// Array Traverse with while

// let fruits = ['apple', 'banana', 'mango', 'orange'];
// let i = 0;
// while(i < fruits.length){
//     console.log(fruits[i]);
//     i++
// }



// do while

// let i = 0;
// do{
//     console.log(i)
//     i++
// } while(i < 5)


// let input;
// do{
//     input = 'user'
//     console.log('got', input);
// } while(!input)


// for in

// const person = {
//     myName: 'Nuhail',
//     phone: 1324163,
//     age: 20,
//     gender: 'male'
// }

// let storage = '';
// for (let Hablu in person){
//     storage += person[Hablu] + '\n'
// }
// console.log(storage)


// for of
// const arr = ['eshan', 'tutul', 'rakibul', 'nasif', 'sajeeb']

// for (let i of arr){
//      console.log(i)
// }


