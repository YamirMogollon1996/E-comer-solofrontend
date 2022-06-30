import React from 'react'

const Finalnotas = ({Total}) => {

  return (
      
    <div className='notes'>
          <div>
             <strong>  Promedio Final (pt) </strong> 
          </div>
          <div>
           
            <strong> { Math.round(Total())} </strong>  
          </div>
          <div>
            <strong>  100% </strong> 
          </div>
</div> 
  )

}

export default Finalnotas