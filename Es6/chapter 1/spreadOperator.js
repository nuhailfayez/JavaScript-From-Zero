// constructing array literal

let valueOne = [1, 2, 3, 4, 5]
let valueTwo = [...valueOne,6,7, 8, 9, 10];
console.log(valueTwo)


// concatenating arrays

let hablu = ['ahad', 'tutul', 'sajeeb']
let SupportTeam = ['salman', 'Rakibul', 'Nasif']

let HabluProgrammer = [...hablu, ...SupportTeam]; // spread operator
console.log('Total team Members of Hablu Programmer : ' + HabluProgrammer)


// copying an array

let score = [80, 90, 100];
let worldCup = [...score]
console.log(worldCup[1]);