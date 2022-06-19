import React, { createContext, useEffect, useState } from 'react'

export const contexto =  createContext()


 //data dura en progeceso de bbdd =>

const use_id = [ 
    
    {id:1 , nombre:"mogollon" , apellido:"pedro"} , 
    {id:2 , nombre:"victor" , apellido:"carlo"}
]

const islloger = false

const AuthProvider = ( { children}) => {
    const [data ,setdata ]   =  useState(use_id)
    const [logger , setislloger] =  useState(  JSON.parse(localStorage.getItem("usuario") || false) )

    
    const   localstorage_usr = ()=>{
                localStorage.setItem("usuario" ,  JSON.stringify(logger))
    }
    useEffect(()=>{
                localstorage_usr()

    },[logger])

    const login =  ()=>{
            setdata(use_id)

    }
    const out_session = ()=>{
        setislloger(  false )
    }

    const datacompratir =   { data  , login, out_session ,  logger , setislloger }
    return (

        <contexto.Provider  value={ datacompratir } >


            {children}

        </contexto.Provider>
  )
}

export default AuthProvider