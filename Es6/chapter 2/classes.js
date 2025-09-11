

class userInfo{
    constructor(name,prof,age,gender,homeTown){
          this.name = name ;
          this.prof = prof;
          this.age = age;
          this.gender = gender;
          this.homeTown = homeTown;
    }
}

const Storing = new userInfo('eshan', 'freelancer', 20, 'male', 'Natore');
console.log(Storing)


class Users{
    constructor(username, userPassword, userEmail){
       this.username = username;
       this.userPassword = userPassword;
       this.userEmail = userEmail;

    }

}

const Store = new Users('Nuhail', '123456', 'nuhail@gmail.com');
console.log(Store)