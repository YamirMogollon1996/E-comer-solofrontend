import React, { useState } from 'react'
import  {  useParams } from "react-router-dom"
import { initaltodos } from './Recucerfuncion'
const Producsingle = () => {

    const {  id } =  useParams()
    const datos =  initaltodos.inventario.find(item => item.id == id)
        const [actual  , setactul] = useState( datos.img )

    const renderimg = ( item  )=>{
        setactul(item)
    }
    return (
    <>
        <div className='session_2'>
                <div  key={datos.id} className='session01'>
                <h1>{datos.nombre}</h1>
                        <div className='Art__yamir'>

                        {
                                datos.images?.length >  0 &&
                                datos.images?.map(  (item,index) => <img  style={{
                                        border :`1px solid ${actual === item  ?  "royalblue" : "black"} `
                                }}   onClick={ ()=> renderimg(item)}  width="50" height="50" className='l-session_mostrar_imagenes' src={item} />)
                        }

                        </div>    
                        </div>                    
            
            <div  className='session'>
            <img width="100" height="100" src={actual} />

            </div>
        
        </div>

<div  style={{
        width:"80%",
        margin:"auto"
}} >
                                
        <h2>
                
                Categoría: ordenadores portátiles.
        Fabricante: Lenovo.
        Fecha de Salida: 03/01/2017. V110. Características Principales: - Pantalla LED de 14" HD 1366 x 768. - Procesador Intel Celeron N3350 a 1,1 GHz. - Memoria RAM de 2 GB. - Disco Duro de 500 GB a 5,400 RPM. - Gráficos Intel HD Graphics 500.
                </h2>
        
</div>
                        
    </>
      )
}

export default Producsingle