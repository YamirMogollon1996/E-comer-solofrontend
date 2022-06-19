import React, { useState , useEffect  , useContext  } from 'react'
import  { Link } from "react-router-dom"
import { contexto } from '../AuthProvider'
import { useNavigate } from "react-router-dom"

const Home = () => {


  const navigate =  useNavigate()   
  const { data  , login, out_session } =  useContext(contexto)
  const [estado , setestado] =  useState("")

  const outsession = ()=>{
      out_session()
      navigate("/login")
  }



  const traerUser =  async () =>{
      let primero =  await fetch("https://jsonplaceholder.typicode.com/users")
      let secon =  await primero.json()
      setestado(secon)
  }

  
  useEffect(()=>{
      traerUser()
  },[])
  return (
        <>

          <button onClick={ login  } >Inciar Session</button>
          <button  onClick={ outsession  } >Cerrar Session</button>
            {data  && <h1>{data.nombre}</h1>}
          {estado ? estado.map(item => <div>
                <Link to={`/user/single/${item.id}`} > 
                    <span> {item.name}</span>
                 </Link>
          </div>):<h1>Cargano ............</h1>}
              
        </>
  )
}

export default Home
