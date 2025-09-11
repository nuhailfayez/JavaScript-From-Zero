// class expression

let person = class {
    constructor(name, email,password) {
        this.name = name;
        this.email = email;
        this.password = password
    }
}

let about = new person('Nuhail Fayez', 'nuhailfayez@gmail.com', '12345');
console.log(about)


// First-class citizen

function Factory(Hablu){
    return new Hablu()

}

let greeting = Factory(class{
    sayHi(){
        console.log('Hello Junior  Programmer')
    }
})

greeting.sayHi()