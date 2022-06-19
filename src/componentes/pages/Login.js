import React, { useContext, useState , useRef } from 'react'
import { contexto } from '../AuthProvider'
import "./formulario.css"
import { useNavigate } from 'react-router-dom'  
const initaluser = {
    
    nombre:"",
    apellido: ""
}

const Login = () => {
    const fomrularioref =  useRef()

    const navigate  =  useNavigate()
    const data  =  useContext(contexto)
    const [text , settext] =  useState( initaluser )
    const [loader , setloader] =  useState (false)
    const [error , seterror ] =  useState("")

    const handlechangue = (e)=>{ 
            settext({
                ...text ,
                [e.target.name] : e.target.value    
            })
    }
    const chekingLoger = ()=>{    
        const Loger =  data.data.find(item => item.nombre === text.nombre  && item.apellido === text.apellido)
        return Loger
    }
    const handleonsubmit = (e)=>{
    
        e.preventDefault()
        // const formu =  fomrularioref.current()
        setloader(true)
           const Cheki  =  chekingLoger()
            if(Cheki){
                    settext(initaluser)
                // chekinginputreset.reset()
                setTimeout(() => {
                    navigate("/")    
                    setloader(false)
                    data.setislloger(true)
                }, 1000);
            }
                
            else{
                seterror({
                    messge:"user incorrent !!!"
                    
                })    
                setTimeout(() => {
                    
                        seterror(" ")
                        setloader(false)

                }, 1000);
              
                    // setloader(false)
            }
            // formu.reset()
    }
  return (
            <>
        
                <div>
                        <h1 style={{textAlign:"center" }}>Formulario </h1>
                        <form  ref={ fomrularioref }  onSubmit={ handleonsubmit } className='form-data'>
                            <input   onChange={  handlechangue }  name='nombre'  placeholder='usuario' ></input>
                            <input  onChange={  handlechangue } name='apellido' placeholder='contrasenia'   ></input>
                            <input type="submit"  ></input>
                        </form>

                </div>

                {error &&   <h1> {error.messge} </h1>}
                    {
                        loader &&
                        <h1>Loader .....................</h1>
                    }
                    
            </>
    
  )
}

export default Login