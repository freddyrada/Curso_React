function useState(name:string){
  
    return [
        name,
        (setName:string)=>{
            console.log(setName)
        }
    ] as const
}


const [name, setName] = useState('Goku');

console.log(name);
setName('Vegueta')