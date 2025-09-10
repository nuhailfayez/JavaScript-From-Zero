function say(message = 'Hey Nuhail'){
    console.log(message)
   
}

say('Hi')

// Rest parameter
function MyInfo(a,b,c,d,...argu){
    console.log(a,b,c,d,...argu)
}

MyInfo(2,4,6,8,5,10,15,50)