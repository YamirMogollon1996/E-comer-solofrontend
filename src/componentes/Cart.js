import React, { useContext, useReducer } from 'react'
import { reducer , initaltodos } from './Recucerfuncion'
import { types } from './types'
import "./single_app.css"
import { contextoglobal } from './authouletpascana'
import { Link } from "react-router-dom"

const Cart = () => {

    const {cart, setinitcaart} =  useContext(contextoglobal)
    const [ todos , dispacth ] =  useReducer( reducer, initaltodos)
    
    return (

    <>

        <div className='container'>
        {todos.inventario &&   todos.inventario.map( item => <div  className='data-invidual' key={item.id}>
                    <h2>{item.nombre}</h2>
                    <h2> $ {item.precio}</h2>
                    <hr></hr>
                    <img  className='imgdevolver'  width='200' height='200' src={item.img} ></img>
                    <hr></hr>
                    <button className='buton1' onClick={()=> dispacth({
                        type : types.agregar,
                        paylodad: {item ,  cart, setinitcaart }
                    })}> Add</button>
                    <button  className='buton2' onClick={()=> dispacth({
                            type: types.show,
                            paylodad: item
                    })}  >Show</button>
    
                            <Link   to={`/producto/${item.id}`}  >More info</Link>
                    
            </div>)     

            
            }

        </div>

<div   className='salto' >
<h1>En cola</h1>
            
            <img  width='100'  height='100'  src= {todos.show.img} ></img>

</div>

    </>
    )
}

export default Cart