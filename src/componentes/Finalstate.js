import React from 'react'
import paypal from "./Asset/paypal.png"
import visa from "./Asset/visa.png"
import express  from "./Asset/express.png"
import  visa2  from "./Asset/visa2.png"

const initlapayametspage = [ paypal ,  visa, express, visa2]


const Finalstate = () => {
  return (

    <>
        <div>
        <h1  style={{
           
        }} >Final State </h1>
            <hr style={{
                width:"80%"
            }} ></hr>
            
              <h1>  TU PEDIDO  </h1>
              <div className='session_final_state'>

              <p>
                            Introduce los siguientes datos para realizar el seguimiento de tu pedido.
                    Debes proporcionarnos tu dirección de correoelectrónico y tu número de pedido por razones de seguridad.

                  
            </p>  
            <p>
                            Introduce los siguientes datos para realizar el seguimiento de tu pedido.
                    Debes proporcionarnos tu dirección de correoelectrónico y tu número de pedido por razones de seguridad.

                  
            </p> 
            <p>
                            Introduce los siguientes datos para realizar el seguimiento de tu pedido.
                    Debes proporcionarnos tu dirección de correoelectrónico y tu número de pedido por razones de seguridad.

                  
            </p> 

              </div>
            <div className='header_icon'>
                {
                  initlapayametspage.map(item => <img  width="40" src={item} />)
                }

            </div>

    
        </div>
            
    </>
  )
}

export default Finalstate