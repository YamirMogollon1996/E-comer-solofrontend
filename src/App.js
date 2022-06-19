import './App.css';
import Pelicula from './componentes/Asset/Pelicula';
import Modal from './Modal';
import heart from "./componentes/Asset/corazon.svg"
import github from "./componentes/Asset/github.svg"
import home from "./componentes/Asset/home.svg"
import Rutas from './componentes/Rutas';
import { useState } from 'react';
import AuthProvider from './componentes/AuthProvider';
import Cart from './componentes/Cart';
import Cartheader from './componentes/cartheader';
import Authouletpascana from './componentes/authouletpascana';
import {  BrowserRouter , Route, Routes } from "react-router-dom"
import Carritodecompra from './componentes/Carritodecompra';
import Finalstate from './componentes/Finalstate';
import Producsingle from './componentes/Producsingle';



function App() {
  
  return (

    <>    

      {/* <AuthProvider>
            <Rutas></Rutas>
      </AuthProvider> */}
  <Authouletpascana>
    <BrowserRouter>

    <Cartheader></Cartheader>

        <Routes>
          <Route  path='/' element={
            <div className='logoinicio_session'>


  <h1> Create for develepor-Yamir </h1>

            </div>
          }  />
          <Route path='/producto/:id' element= { <Producsingle></Producsingle> } >  </Route>
           <Route  path='/productos' element={ <Cart></Cart>}  />
            <Route  path='/carrito'  element={<Carritodecompra></Carritodecompra>} />
            <Route  path='/finalstate' element={<Finalstate></Finalstate>}  />
            <Route path='*'  element={ <h1>404 not found </h1>}>  </Route>
        </Routes>
      


    </BrowserRouter>
      

  </Authouletpascana>
    
    </>
  ) 

}

export default App;
