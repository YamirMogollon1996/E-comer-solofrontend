import React, { useEffect, useState } from 'react'
import Finalnotas from './Finalnotas'
import Promedio from './Promedio'
import "./tabla.css"

const initalrepostirio =   [

    
       {nombre:"Trabajo(t1)" , contador: 0   , porcentaje: 0 , peso:"15%" },   
       {nombre:"Trabajo(t2)" , contador: 0,  porcentaje: 0 ,peso:"15%"},
       {nombre:"Trabajo(t3)" , contador: 0, porcentaje: 0 ,peso:"15%"},
       {nombre:"Trabajo(t4)" , contador: 0 , porcentaje: 0 ,peso:"15%"},
       {nombre:"Examen (Final)" , contador: 0  , porcentaje: 0 ,peso:"40%"},
    ]

const Notas = () => {
    
    const peso =  20
    const [estado , setestado] =  useState(initalrepostirio)
    const [ modalnotas, setmodalnotas] =  useState(true)    
    const handleclicn = (e, position ,item)=>{

            let numerometer = Number(e.target.value)
            setestado( estado.map(  (item , index )  => (
                  index === position ? 
                  {...item , contador:  item.contador = numerometer , porcentaje : item.porcentaje =  20}

                  : item
            )))
            
    } 
    const   Total = ()=>{

        const data =  estado.map(item => item.contador)
        const ultimo =    data[ data.length  -1 ]  * 40 / 100
        const ultimometer =  estado.map(item => item.contador *  20 / 100)
        const jilin =  [...ultimometer ,  ultimo].reduce((a,b)  => a +b)        
        return jilin

        }
    const limpiarnotas  = ()=>{
            setestado(estado.map(item =>(

                    {...item , contador : item.contador = 0}
            )))
            setmodalnotas(true)
    }
    useEffect(()=>{
            Total()

    },[estado])

 return (
    <>
            <table  className='render' >
                <thead  className='thead'>
                     <tr>
                        <th>Pautas de notas</th>
                        <th>Nota</th>
                        <th>Peso</th>                        
                     </tr>    
                </thead>

                <tbody  className='render'>
                        {
                            estado.map( (item,index) => <tr  key={index} >
                                  <td>{item.nombre} </td>
                                  <td>
                                      {!modalnotas   ?  <input  value={item.contador} onChange={(e)=>handleclicn(e,index , item) }  ></input> :item.contador
                                        }
                                  </td>
                                  <td>{item.peso}</td>
                            </tr> )
                        }
                </tbody>
            </table>
                    <div className='container-tabla-result'>
                    <button  className='but-modal' onClick={ ()=>setmodalnotas(!modalnotas)  }  >Calcular Promedio </button>
                    <button  className='but-modal' onClick={ limpiarnotas }  >Limpiar Notas</button>
                        {
                            modalnotas ? 
                        
                                    <Finalnotas  Total={ Total } />  :
                                    <Promedio  Total={Total}  /> 
                        }
                    </div>
                    <div className='render-nota-app'>
                    Estado:    {
                              Total()  >= 12 ? <h1> Aprobado</h1>  :  <h1>Desaprobado</h1>
                        }
                    </div>
    </>

 )  
}

export default Notas