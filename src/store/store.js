import {  configureStore } from "@reduxjs/toolkit"
import { counterslice } from "./slices/counter/counterslice"
import { reqiosslice } from "./slices/counter/reqres/Cantantes"
import { usuariosslice } from "./slices/counter/usuarios/usuarios"


export const store = configureStore({


    reducer : {
        counter:  counterslice.reducer,
        usuarios  : usuariosslice.reducer,
        reqios :  reqiosslice.reducer
    }

})
