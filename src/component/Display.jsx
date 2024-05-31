import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, toggleComplete } from '../Redux/listSlice';

function Display() {
  const dispatch = useDispatch()
  const [completed,setCompleted] = useState(false)
  const items = useSelector((state) => state.list)

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handleToggleComplete = () => {
    setCompleted(true)
    dispatch(toggleComplete(id));
  };

  const completedCount = items.filter(item => item.completed).length;

  return (
    <>
      {items.map(item => (
        <div 
          key={item.id}
          style={{ background: completed ? '#98FB98' : '#d3d3d3' }} 
          className="container mt-5 shadow"
        >
          <div className='d-flex justify-content-center align-items-center'>
            <div className='d-flex mt-3'>
              <div className='d-flex me-5'>
                <input 
                  type="checkbox" 
                  checked={item.completed} 
                  onChange={() => handleToggleComplete(true)} 
                />
                <h3>{item}</h3>
              </div>
              <button 
                onClick={() => handleDelete(item.id)} 
                className='btn btn-danger ms-5'
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="container">
        <h3>Total completed items: {completedCount}</h3>
      </div>
    </>
  );
}

export default Display;
