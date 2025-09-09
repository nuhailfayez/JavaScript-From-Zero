const Info = ['Eshan', 'Tutul', 'Sajeeb', 'Nasif', 'Rakibul']

// for each

Info.forEach(companyInfo)

function companyInfo(value, index, inself){
       console.log(value)
}

// array map 
// ** very interesting topic *** //

const number = [2, 4, 6, 8, 10]; // original

let number2 = number.map(function(value){
        return value * 3
})

console.log(number2) // give a new array 
console.log(number) // not change


// flat map // same like map method

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(function(value){
       return value * 2
});

console.log(newArr)


// filter
let MyFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Fresh =  MyFilter.filter(filterFun)

function filterFun(value){
       return value > 5
}

console.log(Fresh)






