import React, { useDebugValue, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getusertraer } from '../store/slices/counter/reqres/Cantantes'
import { getdata } from '../store/slices/counter/reqres/thunks'
import { Link } from "react-router-dom"

const Reqios = () => {
  
    const dispatch =  useDispatch()
    const { lista  }   =      useSelector(state => state.reqios)

    useEffect(()=>{
      
            dispatch(  getdata() )
    },[])
  return (

<>
    <h1  className='text-center pb-4'> Single-User-templates</h1>
            <div className='container  d_flex' >
                  <div  className='row '>
                    {
                        lista.map(item => (
                              <div className='col-xs-12  col-md-4 gap-2 pb-2 '>
                              <div  className='card  sentir' >
                                          <img  className='card-img-top'  src={item.avatar} ></img>
                                          <div className="card-body">
                                                <h5 className="card-title">{item.last_name}</h5>
                                              <p className="card-text">Some quick example text to build on the card title and make .</p>
                                              <p>  {item.email} </p>
                                 
                                             <Link     className="btn btn-primary" to={`/singe/${item.id}`}  >
                                               Go somewhere
                                              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                             </Link> 
                                             
                                          </div>
                            </div>

                                </div>
                        ))
                    }


                  </div>
                    {/* <div className='col-4  ' >

                            <div  className='card' >
                                          <img  className='card-img-top'  src={item.avatar} ></img>
                                          <div class="card-body">
                                                <h5 class="card-title">Avatar</h5>
                                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                              <p>  {item.email} </p>
                                              <a href="#" class="btn btn-primary">Go somewhere</a>
                                          </div>
                            </div>
                  </div> */
  }
          
            </div>


</>
  )
}

export default Reqios