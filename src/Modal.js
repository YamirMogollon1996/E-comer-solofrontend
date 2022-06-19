import React, { useState  , useRef} from 'react'

const inital = {
        nombre:"",
        apellido:""
}

const es =  [

                {id:1 , nombre:"miguel" ,  edad:44,    start : []},
                {id:2 , nombre:"L-yagami" ,  edad:445,  start : [] },
                {id:3 , nombre:"miguel-todo" ,  edad:100, start : [] },
]

const Modal = () => {
        const formstate =  useRef()
        const [estado , setestado] =  useState(false)
        const [paatriota , setpatriota] =  useState(inital)
        const [ names , setnames] =  useState( es )

  const onchangue = (e)=>{
                setpatriota({
                        ...paatriota ,
                        [e.target.name] : e.target.value
                })
  }

    const handleSubmit  = (e)=>{
                const formstate =  formstate.current
                e.preventDefault()
                console.log(paatriota)
                const stado  =  formstate.current
                stado.reset()
                setTimeout(() => {
                        setestado(false)
        
                }, 1000);
                formstate.reset()
                
    }
    const handle_fucntion = ()=>{
                setestado(false)
    }

  return (
        <>
                <div  className={`container-modal-dark  ${estado  && "activar" } `}  >
                        <div className={  `container-seccion   ${estado  && "activar" }` } > 
                                <form  ref={ formstate }  onSubmit={ handleSubmit  }  className='dar-container-form'>
                                        <h1> Create  User</h1>
                                    <input      onChange={ onchangue }  placeholder='nombre' name='nombre' ></input>
                                    <input      onChange={ onchangue }  placeholder='apellido' name='apellido' ></input>
                                    <button>Enviar</button>
                                </form>
                                <button onClick={ handle_fucntion }   className='close__modal'> X </button>
                                <p>Lorem</p>
                        </div>

                </div>
                {
                names.map(item => (<div className='app_details'>
                        
                        <h2>{item.nombre}</h2>
                        <h2>{item.edad}</h2>
                        <div className='app-details'>                    
                                <p>{
                                        item.start.map(item => <p>{"yamir"}</p>)
                                        }</p>    
                                </div>
                                
                        </div>)
                )
        }
        <button onClick={()=>setestado(!estado)} >Active-modal</button>


        </>
  )
}

export default Modal