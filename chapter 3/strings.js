// All About Advance Strings

// *** String Methods

// length

let text = 'JavaScript string length';
let length = text.length;
console.log(length);

console.log(text.charAt(2))

// concat 
let text1 = 'Hello ';
let text2 = 'World';
let text3 = text1.concat(text2);
console.log(text3);

// slice
let text4 = 'Apple, Banana, Kiwi';
let part = text4.slice(3,13);
console.log(part)

//start, end
console.log(text4.startsWith('Apple'))
console.log(text4.endsWith('Banana'))

//Trimming
let str = "   Hello   ";
console.log(str.trim());

// Replace
let text5 = 'I like JavaScript';
console.log(text5.replace('JavaScript', 'Python'));

// to upperCase
let text6 = "hello world";
console.log(text6.toUpperCase());

// to lowerCase 
let text7 = 'HABLU PROGRAMMER';
console.log(text7.toLowerCase())

// repeat
let text8 = 'NuhailFayez ';
console.log(text8.repeat(5))

