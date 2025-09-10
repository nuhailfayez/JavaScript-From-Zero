// step 1

function sayHi(username,userinfo){
    return{
        username,
        userinfo
    }
}

console.log(sayHi('Nuhail', 'Founder and CEO At Cartubit'))

// step 2

let Message  = 'Hi Junior Programmers';
  userName = 'Eshan'

  const MyInfo = {
    Message,
    userName
  }

  console.log(MyInfo)

  // step 3

  let name = 'Eshan';
  let Info = {
    [name] : 'He is Founder And CEO At Hablu Programmer',
  }
   
  console.log(Info)
  console.log(Info[name])
  console.log(Info['Eshan'])

  // step 4
  let server = {
    name: 'server side',
    restart(){
      console.log('This is concise method and its working')
    }
  }

  console.log(server.restart())