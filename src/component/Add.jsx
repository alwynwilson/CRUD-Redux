import React, {  useState } from 'react'
import { addItem } from '../Redux/listSlice'
import {useDispatch} from 'react-redux'

function Add() {

    const dispatch = useDispatch()

    const [task,setTask] = useState("")

    const handleAdd = ()=>{
        dispatch(addItem(task))
        setTask("")
    }
  return (
    <>
        <div className="conatiner mt-5">
            <h1 className="text-center">My Todo List</h1>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <input onChange={e=>setTask(e.target.value)} type="text" placeholder='Your todo here !!'/>
                <button onClick={handleAdd} className='btn btn-primary ms-3'>Submit</button>
            </div>
        </div>
    </>
  )
}

export default Add