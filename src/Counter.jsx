// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './redux/counterSlice'

function Counter() {
  const dispatch =useDispatch()
  const count =useSelector((state)=>state.counterReducer.count)
  const[amount,setAmount]=useState("")
  
  
  const handleIncrement=()=>{
    if(amount==""){
      alert("please provides values properly")
    }else{
      dispatch(incrementByAmount(Number(amount)))
      setAmount("")
    }
  }


  return (
    <div>
        <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-items'>
        <div className='d-flex justify-content-center align-items-center border rounded p-5 w-50 flex-column'>
        <h1 style={{fontSize:'50px', color:"red"}}>Counter Application</h1>
        <h1 style={{fontSize:'100px',color:"white"}}>{count}</h1>
        <div>
            <div className='btn btn-warning' onClick={()=>dispatch(increment())}>Increment</div>
            <div className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</div>
            <div className='btn btn-success'  onClick={()=>dispatch(decrement())}>Decrement</div>
        </div>
        <div className='d-flex mt-5'>
         <input onChange={e=>setAmount(e.target.value)} value={amount} type="text" className='form-contrtol'  placeholder='enter amount to be incremented'/>
         <button onClick={handleIncrement}  className='btn btn-primary  ms-3'>Increment Amount</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Counter