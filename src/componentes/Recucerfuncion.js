import { types } from "./types"

import hp from "./Asset/hp.webp"
import asus  from "./Asset/asus.webp"
import lenovo from "./Asset/lenovo.webp"
import impresora from "./Asset/epson.jpg"
import mouse from "./Asset/mouse-.webp"
import montitor  from "./Asset/monitor.webp"

import asus01 from "./Asset/asus01.jpg"
import asus02 from "./Asset/asus02.jpg"
import asus03 from "./Asset/asus03.png"

import let01 from "./Asset/let01.jpg"
import let02 from "./Asset/let02.jpg"
import let03 from "./Asset/let03.webp"


import lenovo01  from "./Asset/lenovo01.webp"
import lenovo02 from "./Asset/lenovo02.webp"
import lenovo03 from "./Asset/lenovo03.webp"


import { useContext } from "react"
import { contextoglobal } from "./authouletpascana"


export const initaltodos =  {
    
    cart: [{id:1 , nombre:"computer" , precio:100}],
    show:{id:3 , nombre:"computer - Asus" , precio:300 , img : lenovo},

    inventario : [ 

            {id:1 , nombre:"computer -Lenovo", precio:100  , img:hp  , images:[asus01,asus02,asus03] },
            {id:2 , nombre:"computer -Let" , precio:200  ,img:asus  , images: [lenovo01,lenovo02,lenovo03 ] },
            {id:3 , nombre:"computer - Asus" , precio:300 , img : lenovo , imagenes: [let01 ,let02,let03]},
            {id:4 , nombre:"mouse -Lenovo", precio:100  , img: mouse },
            {id:5 , nombre:"impresora -mouse" , precio:200  ,img: impresora },
            {id:6 , nombre:"monitor - led" , precio:300 , img : montitor },
            
    ]

}

export const reducer = ( stado , action)=>{

    if (action.type  === types.agregar){
            const {item ,cart, setinitcaart} =  action.paylodad
            const encontrar =  cart.find(prod=> prod.id === item.id)
                 !encontrar   &&
                setTimeout(() => {
                       setinitcaart([
                           ...cart , 
                           {...item,  cantidad:  1  ,  precio  :  item.cantidad *  item.precio || item.precio , tota: item.precio}
                       ])
                }, 200)
                return stado
            
}


    if (action.type === types.show){
        return{
            ...stado,
            show: action.paylodad
        }
    }
    

    if (action.type === types.eliminar){
                
        
    }
    if (action.type === types.aumentar1){

    }
    if (action.type  ===  types.uniqueproducto) {
            console.log("yamir") 
            console.log(action.paylodad)

    }

    return stado
}
