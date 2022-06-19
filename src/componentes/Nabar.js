import React from 'react'
import  {  Link } from "react-router-dom"
const Nabar = () => {
return (
   <>
        <ul>

                <Link to="/" > Home</Link>
                <Link to="/servicios" > Servicios </Link>
                <Link to="/nosotros" > nosotros </Link>
                <Link  to="/mishel"  > mishel </Link>
                <Link to="/login" >Login   </Link>
                
        </ul>
   
   </>
  )
}

export default Nabar