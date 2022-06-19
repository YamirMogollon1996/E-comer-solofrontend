import React, { useContext } from 'react'
import { contexto } from './AuthProvider'



const PublicRouter = ( {children} ) => {

    const {data  , login, out_session ,  logger , setislloger}  = useContext(contexto)
    return  !logger ?  children  :  children 
}

export default PublicRouter