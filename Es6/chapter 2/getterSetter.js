const person = {
    firstName: 'Eshan',
    lastName: 'Ahmed',
    Age: 20,
    prof: 'Programmer',
    get pro(){
          return this.prof
    }
}

console.log(person)


// set 

const userInfo = {
    username: 'Hablu Programmer',
    email: 'habluprogrammer@gmail.com',
    BusinessType: 'edTech Business',
    set NewEmail(newemail){
        this.email = newemail
    }
}

userInfo.NewEmail = 'admin@hablu-programmer@gmail.com'
console.log(userInfo)