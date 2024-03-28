import { getHeroeById } from "./bases/08-import";


const getHeroeByIdAsync = (id) => {
    return new Promise(( resolve, reject) => {
        setTimeout(() => {
            try{
                const heroe = getHeroeById(id)    
                
                if(heroe !== undefined){
                    resolve(heroe)
                }else{
                    caches()
                }
            }catch{
                reject( 'Heroe no encontrado')
            }
        },2000)
    
    });
}

getHeroeByIdAsync(2).then((heroe) =>{
    console.log('Heroe', heroe)
}).catch(( err) => console.log(err))