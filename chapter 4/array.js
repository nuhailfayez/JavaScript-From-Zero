// All About Array
let emptyArray = [];
let colors = ['red', 'green', 'Blue', 'Yellow'];
console.log(colors)


// accessing array elements
console.log(colors[1]);

// Getting the array size
console.log(colors.length)

// Basic operations on arrays

//push

// colors.push(true);
// colors.push(false)
// console.log(colors)

//unshift

// colors.unshift('Brown')
// colors.unshift('white')
// console.log(colors)

// pop

// colors.pop()
// console.log(colors)

//shift

// colors.shift()
// console.log(colors)


// Finding an index 
console.log(colors.indexOf('Yellow'))


// Changing an Array Element
let myArr = ['Fayez ', ' Roman ', ' Hablu mama ', ' Eshan ', 'Tutul'];

myArr[1] = ' Nuhail '; // change array element
console.log(myArr.toString())
console.log(myArr)

// accessing the first and last array element
console.log(myArr[0]);
console.log(myArr[myArr.length - 1]);

myArr[20] = 'Hasan'; // Creates empty items
console.log(myArr)


// some methods of array

// join
let myInfo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myInfo.join(' # '))

// delete
delete myInfo[0]; //using delete() leaves undefined holes in the array.
console.log(myInfo) 

// concat
const arr1 = [true, false, 10, 20];
const arr2 = [30, 40, 50, 60];
console.log(arr1.concat(arr2))

//flat
const myArr2 = [[1,2], [3,4], [5,6]]
console.log(myArr2.flat())

//splice
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.splice(2,1,'kiwi','Lemon')
console.log(fruits)

//toSpliced
const months = ['Jan', 'Feb', 'Mar', 'Apr'];
console.log(months)
console.log(months.toSpliced(0,1))

//indexof
console.log(months.indexOf('Mar'));

//lastIndexof
console.log(months.lastIndexOf('Apr'))

//includes
console.log(months.includes('Jan')) // value always true or false
