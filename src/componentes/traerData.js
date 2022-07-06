import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment , decrement , incrementar2 ,reset} from '../store/slices/counter/counterslice'

const TraerData = () => {

    const  {  counter ,  }   = useSelector(  state => state.counter)
    const dispatch =  useDispatch()

    useEffect(()=>{
                
    },[ ])

    
  return (
<>


        <h1>{ counter }</h1>
        <button  onClick={ ()=> dispatch(increment()) } >Auemntar</button>
        <button  onClick={ ()=> dispatch(decrement()) }  >decrement</button>
        <button  onClick={ ()=> dispatch(incrementar2( 2)) }  >decrement</button>
        <button  onClick={ ()=> dispatch(reset( 0 )) }  >  Reset </button>


</>
  
    )

}

export default TraerData