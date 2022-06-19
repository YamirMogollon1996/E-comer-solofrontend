import React, { createContext, useEffect, useState } from 'react'

export const contextoglobal  =  createContext()

const initalcart = []


const Authouletpascana = ( { children }) => {

    const  [ cart ,setinitcaart  ] =  useState( JSON.parse(localStorage.getItem("cart") || initalcart) )
    const  data =  { cart, setinitcaart } 
    const savelocalstorage = ()=>{
                localStorage.setItem("cart" ,  JSON.stringify(cart))
    }
    useEffect(()=>{
            savelocalstorage()

    },[cart])


    return  <contextoglobal.Provider value={ data } >

        {children}

    </contextoglobal.Provider>
  
}

export default Authouletpascana