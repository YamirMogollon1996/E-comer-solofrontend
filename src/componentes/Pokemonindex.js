import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fecthcpokemon } from '../store/slices/counter/usuarios/thunks'
import { removerpokemon, updatepokemon } from '../store/slices/counter/usuarios/usuarios' 


const Pokemonindex = () => {

    const {   iloading , usuarios }=  useSelector( state => state.usuarios)
    const dispatch =  useDispatch()
    useEffect(()=>{
        dispatch(  fecthcpokemon() );
        
    },[])

    return (
            <>
            <div className='container'>


            <h1> TraerPokemons </h1>
            <hr></hr>
                
                { usuarios.map( item => (
                    <div key={item.id} >
                         <h3>{ item.name }</h3>
                         <button className='btn btn-outline-primary' onClick={()=> dispatch( removerpokemon(item))} > Eliminar </button>
                         <button   className='btn btn-outline-danger'  onClick={()=> dispatch( updatepokemon({
                             item,
                             archivo :"MOGOLLON"
                         } ))} >updatePokemon</button>
                    </div>
                   
                )) }


            </div>
            /*     
            
        </>
   
  )
}

export default Pokemonindex