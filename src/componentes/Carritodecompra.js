import React, { useContext, useEffect, useState } from 'react'
import { contextoglobal } from './authouletpascana'
import { Link } from "react-router-dom"
import derecha from "./Asset/derecha.svg"

const Carritodecompra = () => {

        const {  cart, setinitcaart }  = useContext(contextoglobal)
        const  [total , settota ] =  useState(  0  || 0)

        const llamos = ( productshow )=>{
                     
                        setinitcaart(cart.map(item => (
                                item.id === productshow.id ? 
                                {...item , cantidad:  item.cantidad + 1 , total :  (item.cantidad *  item.precio) +item.precio   }
                                :item
                        )))
         
        }
        

        const restar =  ( productshow  )=>{ 

                        setinitcaart(cart.map(item => (
                                item.id === productshow.id ? 
                                {...item , cantidad:  item.cantidad - 1   , total :  (item.cantidad *  item.precio)  -item.precio }
                                :item
                        )))

        }

        useEffect(()=>{
                totalprocuto()
        
        },[cart])

        const totalprocuto = ()=>{

                if (cart.length > 0  ) { 
                        settota( cart.map(item => item.total).reduce((acum,item) => acum+ item) )
                }
        }
  return (


    <>
                <h1 style={{ textAlign:"center" }} >show description cart  </h1>
            {
                cart.map(item => <div  key={item.id
                }  className='div__directivas'>
                        {/* <h3>{item.id}</h3> */}
                        <h3>{item.nombre}</h3>
                        <h4>${item.precio}</h4>
                        <h4>{item.cantidad}</h4>
                        <h4>{item.total}</h4>
                        <div>
                        <button  onClick={ ()=>llamos(item) } >+</button>
                        <button  onClick={()=> restar(item)} >-</button>
                        </div>
                 
                </div>)
            }

            <div className='position_aboulute'>
            <h1  style={{
                    paddingTop:"1em",
                    margin:"0 auto", 
                    textAlign:"center"  , 
                    display:"inline",  
                    borderBottom:"1px solid black"}}>Total :  {total}  $</h1>
            </div>
            

                {cart.length >  0  &&
            <div  className='link__session_nextpage' >
                        <Link     to='/Finalstate' > <img  src={derecha} ></img></Link>

            </div>}
         
    
    </>
  )
}

export default Carritodecompra