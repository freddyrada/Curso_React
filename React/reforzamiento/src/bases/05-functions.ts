function greet(name:string){
    return `Hola ${name}`
}


const greet2  = (name:string)=>{

      return `Hola ${name}`

}


const getUser2 = ()=>{

    return {
        uid: 'ABC-123',
        username:'El_papi23'
    }
}

const getuser = getUser2();
console.log(getuser.uid)
console.log(getuser.username)
console.log(getuser)



const massage = greet('Goku')
console.log(massage)


const massage2 = greet('Vegueta')
console.log(massage2)