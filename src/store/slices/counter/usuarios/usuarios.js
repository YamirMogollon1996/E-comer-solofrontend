import  { createSlice }  from '@reduxjs/toolkit'


export const usuariosslice =  createSlice({

    
            name:'usuarios',
            initialState : {
                        usuarios : [],
                        iloading: false

            },      
            reducers : {
                changueisloading : (state )=>{
                            state.iloading = true
                },
                getpokemon : (state,actions )=>{
                    state.usuarios =  (actions.payload)
                } ,
                removerpokemon : ( state, actions)  =>{
            
                       const { id } =  actions.payload
                       state.usuarios = state.usuarios.filter (item => item.id  != id) 
                },

                updatepokemon : (state , actions )=>{

                    const { item ,archivo } =  actions.payload
                    const encontrar =  state.usuarios.find(user => user.id == item.id)
                    if (encontrar){
                            encontrar.name =  archivo  

                    }

        }}
})
export const {   changueisloading , getpokemon , removerpokemon  , updatepokemon }   = usuariosslice.actions