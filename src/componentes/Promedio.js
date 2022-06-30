import React from 'react'

const Promedio = ({Total}) => {
  return (

        <div  className='grid-template' >

            <div> <strong>  Promedio Final sin redondeo </strong>  </div>
      
            <div>  <strong>  { Total().toFixed(2)}  </strong>    </div>
            <div> <strong>   Promedio Final (pt) </strong> </div>
            <div> <strong>  { Math.round(Total())} </strong>  </div>


        </div>
  )
}

export default Promedio