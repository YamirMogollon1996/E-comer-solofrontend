import React, { useState , useRef } from 'react'
import boys from "./componentes/Asset/boys.jpg"
import scale from "./componentes/Asset/scale.jpg"

const imagensdianmicas = {

    boys,
    scale
}

const  initalState = {
    id:"",
    name:"",
    valor : "",
    start : 0
}

const Modaladd = ({ handleCangue , setShowModal , showModal , setpelicula , pelicula }) => {
    const formref =  useRef()
    const [text ,settext ] =  useState(  initalState )  
    const HandlechangueTexto = (e)=>{
            settext({
                id: Date.now(),
                nombre:e.target.value, 
                img:  imagensdianmicas[e.target.value] || "no encntroado"
            })
    }
    const handleSumit = (e)=>{
            const {  id , nombre }  = text
            e.preventDefault()         
            setShowModal(false)
            const valeuencontrado =      pelicula.find( item => item.nombre ==  nombre) 
            if (valeuencontrado === undefined){
                setpelicula([
                                ...pelicula,
                                text
                            ])
                            settext(initalState)
            }
    }
    const OpenModal = ()=>{
        setShowModal(!showModal)
}
    return (
      <>        
        <div className={`${showModal && "cuerpor-emiratos"} `}>
                
        <button  className='modal-view' onClick={ OpenModal}  >Add movie</button>
                <form  onSubmit={ handleSumit }  className=  {`form-data-modal ${showModal && "form-data-control-modal-show" }`} >
                    <input   required onChange={ HandlechangueTexto }  placeholder='Name' className=''></input>
                  <span>Calification</span>
                    <select  className='director'  onChange={ (e)=>handleCangue(e) } >

                            <option value="1" >1</option>
                            <option value="2" >2</option>
                            <option value="3">3</option>
                            <option  value="4">4</option>2
                            <option value="5" >5</option>

                    </select>    
    
                    <input className='subtmit'  type="submit"></input>
            </form>



        </div>
        
      </>
        
    )
}

export default Modaladd