import './App.css';
import TraerData from './componentes/traerData';
import {  Provider  } from "react-redux"
import { store } from './store/store';
import Pokemonindex from './componentes/Pokemonindex';
import Reqios from './componentes/Reqios';
import { BrowserRouter ,Route , Routes } from "react-router-dom"
import SingleUser from './componentes/SingleUser';

function App() {

  return (

    
    <>    
      <Provider  store={  store } >
{/* 
             <Pokemonindex></Pokemonindex>        */}
             <BrowserRouter>
                  <Routes>
                    <Route  path='/'  element={  <Reqios></Reqios> } ></Route>
                    <Route  path='/singe/:id'  element = { <SingleUser></SingleUser> } ></Route>
                  </Routes>



             </BrowserRouter>
          
             
       </Provider>
         
    </>
  ) 

}

export default App;
