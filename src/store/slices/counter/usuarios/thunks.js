import { changueisloading, getpokemon } from "./usuarios";

//thunks para peticones =>p


export const fecthcpokemon = ()=>{
    
    return  async ( dispatch  ,  getState)=>{

            dispatch(    changueisloading() ) ;
            const first =  await fetch("https://jsonplaceholder.typicode.com/users")
            const second =  await  first.json()
            dispatch(   getpokemon (second) )
    
        }

    }