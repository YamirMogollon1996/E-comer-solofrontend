import React, { useReducer } from 'react'


const types = {
    data:"data"
}

const reducer = (  state , action)=>{
    if (action.type ===  types.data){
        console.log(state)
    }

    return state
}

const initialState = [

    {id:1,nombre:"mogollon"},
    {id:2,nombre:"Lopezxmogollon"},
    {id:3,nombre:"xxlmogollon"},

]

const Obtener = () => {

    const [estado, disptach] =  useReducer( reducer , initialState ) 

    return (
        <>

            {
                estado.map(item => (
                    <div>

                    <h1>{item.nombre}</h1>
                    <button  onClick={()=>  disptach({
                            type:types.data,
                            payload:item
                    }) } >Cliker</button>

                    </div>
                    
                ))
            }
        
        </>
  )
}

export default Obtener