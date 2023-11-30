import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Success() {
    const navigate = useNavigate();

  return (
    <div className='text-center'>
        <h2 className='text-success mt-5 pt-5'>Your purchase has been successfully registered !</h2>
        <button onClick={()=> navigate('/')} className='btn btn-secondary mt-5'>Back to the products page</button>
    </div>
  )
}
