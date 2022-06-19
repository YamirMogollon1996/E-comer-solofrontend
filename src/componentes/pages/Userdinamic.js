import React, { useEffect, useState } from 'react'
import { useParams , useNavigate  } from "react-router-dom"


const Userdinamic = () => {
    const navegar = useNavigate()
    const  [usersingle , setusersignle] =  useState("")    
    const { id } =  useParams()
    const usersingleasync = async ()=>{
            let primero  =  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            let secondo =   await primero.json()
            setusersignle(secondo)
    }
    useEffect(()=>{

        usersingleasync()

    })
    const Gohome = ()=>{
        navegar("/")
    }

  
    return (

            <>
            
                        <h1>List -single -user</h1>
                        {usersingle && <div>
                                    <h2>{ usersingle.name }</h2>
                                    <h2>{usersingle.email}</h2>
                                    <h2>{usersingle.username}</h2>
                            </div>}
                            <button  onClick={ Gohome } >Go home </button>
            </>
  )
}

export default Userdinamic