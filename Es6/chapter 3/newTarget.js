function person(name){
    if(!new.target){
        throw 'must use new operator with this person function'
    }

    this.name = name;

}

let myperson = new person('Nuhail Fayez');
console.log(myperson)