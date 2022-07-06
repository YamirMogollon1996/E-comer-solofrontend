import  { createSlice }  from '@reduxjs/toolkit'



export const reqiosslice =  createSlice({
            name:  'reqios' ,
            initialState : {

                lista :   [], 
                usersingle: [],
                isloading :  false
            },
            reducers : {
                //todo: reducer todas las acciones que vamos a meter
            getusertraer : (  state  , actions)=>{
                  state.lista =   (actions.payload.data)

            },            
            getsingleuser : (state, actions )=>{
                    state.usersingle =  actions.payload                            
            },
            getchangueState : (state,actions )=>{
                    state.isloading =  actions.payload


            }
            
        }
})
 
export const { getusertraer   , getsingleuser , getchangueState } =  reqiosslice.actions