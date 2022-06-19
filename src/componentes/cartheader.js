import React, { useContext } from 'react'
import { contextoglobal } from './authouletpascana'
import carrito from "./Asset/cart.svg"
import { Link } from 'react-router-dom'

const Cartheader = () => {
  const {   cart, setinitcaart }  = useContext(contextoglobal)
  return (
        <>
        
            <div className='headerticlo' >
            <h1>  Regular </h1>
            <Link  className='link__compra'  to='/'   >home</Link>
            <Link className='link__compra' to='/productos' >Productos</Link>
            <Link  className='link__compra' to='/carrito' > Carritos </Link>
            <div className='border_imgen'>
                <img className='session' src={carrito} />
                <h1>{cart.length}</h1>

            </div>
             
            </div>
          
        
        </>
  )
}

export default Cartheader