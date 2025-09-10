// for (variable of iterable){

// }

let scores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

for (let store of scores){
    console.log(store)
}

// Object destructing

const ratings = [
    {name: 'Nuhail Fayez', info: 'CEO At Cartubit'},
    {name: 'Eshan', info: 'CEO At Hablu Programmer'}
]

let sum = 0;

for (let {name} of ratings){
    console.log(name)
}


// Iterating over strings

let str = 'Nuhail Fayez';

for (let storing of str){
    console.log(storing)
}