import { getsingleuser, getusertraer  , getchangueState} from "./Cantantes"

export const getdata = (      )=>{

    return  async ( dispatch , getState )=>{

        const primero =  await  fetch("https://reqres.in/api/users?per_page=12")
        const second =  await primero.json()
        dispatch(getusertraer(second))
    }
}


export const GetdataSingle =   (id)=>{

    return  async (dispatch) =>{
    
        dispatch(getchangueState(true))
        const primero =  await fetch(`https://reqres.in/api/users/${id}`)
        const obtenerData = await primero.json()
        dispatch( getsingleuser(obtenerData.data))
        dispatch(getchangueState(false))
       
    }

}