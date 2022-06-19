import React, { useContext } from 'react'
import { contexto } from './AuthProvider'
import { useNavigate  , Navigate } from 'react-router-dom' 

// controler to data and user to each for out or oversite site home 
//dot no user no looger redirect to login

const PrivateRouter = ({children}) => {

      const {data  , login, out_session ,  logger , setislloger} =  useContext(contexto)
      return    logger   ? children :   <Navigate  to="/login"  />
}


export default PrivateRouter