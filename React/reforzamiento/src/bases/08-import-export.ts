import { heroes, Owner, type Hero } from '../data/heroes.data';


const getHeroid = (idh:number): Hero =>{

  const hero  = heroes.find((hero: Hero) => {
        return hero.id === idh
    });

    if(!hero){
        throw new Error('NO EXISTE ESE HEROE');
    }

    return hero;

}


// console.log(getHeroid(1))


export const getHeroesByOwner = (owner:Owner): Hero[] =>{

    const hero = heroes.filter((hero: Hero)=>{
        return hero.owner === owner
    });

    if(!hero){
        throw new Error ('no encontrado')
    }

    return hero


}

export type { Hero };
