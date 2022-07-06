import  { createSlice }  from "@reduxjs/toolkit"

export const counterslice =  createSlice({

    name:'counter',
    initialState : {
        counter : 10
    },
    reducers : {
            increment :(state) =>{
                state.counter +=1
            },
            decrement : (state) =>{ 
                state.counter -=1
            },
            incrementar2 :  (state , action) =>{
                    state.counter +=  (action.payload)
            },
            reset : (state ,action) => { 
                state.counter = action.payload
            }
    }

})  


export const {  increment ,  decrement, incrementar2 ,reset}   = counterslice.actions



