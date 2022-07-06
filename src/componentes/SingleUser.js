import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useParams } from  "react-router-dom"
import { GetdataSingle } from '../store/slices/counter/reqres/thunks'


const SingleUser = () => {

  const       { usersingle }=  useSelector(state  => state.reqios)

  const dispatch =  useDispatch()
  const { id  }  =  useParams()
  useEffect(()=>{
      dispatch( GetdataSingle(id) )
  },[])
  

  return (
    <>
  
          {/* <div  className='container' > */}

        <div className="card m-3 imagen text-center mx-auto border" >
              <img className="card-img-top " src={usersingle.avatar} alt="Card image cap" />
              <div className="card-body border">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <h2>{usersingle.email}</h2>
                <button  className='btn btn-danger'>Todo</button>
          {/* </div> */}
</div>


        </div>
    </>
  )
}

export default SingleUser