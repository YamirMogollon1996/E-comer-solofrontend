import React, { useEffect, useState } from 'react'
import star  from "./star.png"
import harry from "./Harry potter.png"
import terminator from "./terminator.jpg"
import zhanza from "./Zhazan.jpg"
import Modaladd from '../../Modaladd'


const PeliculaMovie = [  

    {id:1 ,nombre:"Harry Potter", rating : 0 ,  img : harry} , 
    {id:2 ,nombre:"Terminator", rating : 0 ,  img:terminator} , 
    {id:3 ,nombre:"Zhamzan", rating : 0,  img:zhanza},

]


    
const Pelicula = () => {

    const [pelicula , setpelicula]  =  useState(  JSON.parse(localStorage.getItem("peliculas")) ||  PeliculaMovie)
    const [showModal  , setShowModal] =  useState(false)
    const local_Storage = ()=>{
        localStorage.setItem('peliculas', JSON.stringify(pelicula));
    }
    const removeMovie  = (RemoveProvider)=>{
            setpelicula(pelicula.filter(item => item.id !== RemoveProvider.id))

    }

    useEffect(()=>{
            local_Storage()
    },[pelicula])
    const handleCangue = (e ,provider)=>{
        const valor =   parseInt(e.target.value)
        const newpelicula = pelicula.map(item => (
            item.id === provider.id 
            ? 
            {...item   , rating : item.rating = e.target.value ,  start: Array(valor).fill(" ")  }
            :
            item
        ))  
        setpelicula( newpelicula)
    }
  return (
        <>
        <Modaladd
            
            setpelicula={setpelicula}
            setShowModal = { setShowModal  } 
            showModal={ showModal  }           
            handleCangue={handleCangue}
            pelicula={pelicula}
             >
                </Modaladd>   

        <div className='container-session'>
       
        {pelicula.map(item => (
                    <div className='user-single'>
                   
                            <h2>{item.nombre}</h2>                            
                            <h4>Calification :   </h4 >
                            {item.start &&              
                                item.start.map(item =><img style={{ width:"30px" , height:"30px" }}  src={star}></img>)
                            }           
                            <br></br>   
                            <img  className='img-top' src={item.img}  />
                               
<br></br>
<span>Tendency :  </span>
                     <select  className='director'  onChange={ (e)=>handleCangue(e,item) } >

                            <option value="1" >1</option>
                            <option value="2" >2</option>
                            <option value="3">3</option>
                            <option  value="4">4</option>
                            <option value="5" >5</option>

                    </select>     
                    <br></br>
                    <button  onClick={ ()=>removeMovie(item) } className='eliminar-movie'>Elimminar</button>
                    {/* <input type="file" ></input> */}
                    </div>
                ))}



        </div>
               
        </>
  )
}



export default Pelicula