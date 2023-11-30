import React, { useContext } from 'react'
import { useAPI } from "../../context/DataContext";
import Card from "../Card";
import { CartContext } from '../../context/CardContext'
import { useNavigate } from 'react-router-dom';

export default function Basket() {

  const navigate = useNavigate();
  const cart = useContext(CartContext)
  const { products } = useAPI();
  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)


  return (
    <>
      {productCount > 0 ? (
        <>
          {cart.items.map((item, i) => {
            const { id } = item;
            const product = products.find(p => p.id === id);
            return (
              <div>
                <div className='row container align-item-center mx-auto pb-5 my-5 text-center'>
                  <div className='col-4 shadow mt-5 '>
                    <Card key={i} data={product} />
                  </div>
                </div>
              </div>
            )
          })}
          <button onClick={()=> navigate('/success')} style={{marginBottom:'100px',marginLeft:'120px'}} className='fw-bold btn btn-success p-3 '>Complete the purchase</button>
          <h4 className=' bg-dark text-light rounded p-3 border fixed-bottom'> Total purchase: {cart.getTotalAmount()}$</h4>
        </>
      ) : (
        <h2 className='mt-5 pt-5 text-center'>Your shopping cart is empty!</h2>
      )}
    </>
  )
}

