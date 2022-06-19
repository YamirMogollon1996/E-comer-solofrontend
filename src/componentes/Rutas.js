import React from 'react'
import { BrowserRouter , Route, Routes }  from  "react-router-dom"
import Nabar from './Nabar'
import Home from './pages/home'
import Login from './pages/Login'
import Mishel from './pages/Mishel'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import Userdinamic from './pages/Userdinamic'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'


const Rutas = () => {
  return (
        <>  
            <BrowserRouter>
                <Nabar></Nabar>
                  <Routes>
                    <Route path='/login'  element={<Login></Login>} ></Route>
                    <Route  path='/'  element={ <Home></Home>  } ></Route>
                    <Route  path='/servicios'   element={

                      <PrivateRouter>
                        <Servicios></Servicios> 
                       </PrivateRouter>
                  

                    } ></Route>

                    <Route  path='/nosotros'   element={ 
                    
                    <PublicRouter>
                      <Nosotros></Nosotros>
                    </PublicRouter>
                     } ></Route>
                    <Route  path='/mishel'   element={ 
                      <PublicRouter>
                          <Mishel></Mishel>
                      </PublicRouter>
                     } ></Route>
                    <Route path='/user/single/:id'  element= { <Userdinamic></Userdinamic> } ></Route>
                    <Route path='*' element={
                    
                    <h1>404 NOT FOUND</h1>
                    } >

                    </Route>


                  </Routes>
            
            </BrowserRouter>
        
        
        </>
  )
}

export default Rutas
