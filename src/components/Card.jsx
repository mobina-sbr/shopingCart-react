import React, { useContext } from 'react'
import './card.css'
import { CartContext } from '../context/CardContext'


export default function Card({ data, children }) {

    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(data.id)

    return (
        <div>
            <div>
                <img src={data.image} alt="" className='p-2 mt-5' height='160px' width='160px' />
            </div>
            <div className='my-5 text'>
                <p >{data.title}</p>
                <p>{`Category : ${data.category}`}</p>
                <span className='fw-bold price'>{`Price : ${data.price}$`}</span>
            </div>
            <div>
                {productQuantity > 0 ? (
                    <>
                        <p>Quantity : {productQuantity}</p>
                        <button onClick={() => cart.addItemToCart(data.id)} className='btn btn-outline-secondary mx-1 mb-5'>+</button>
                        <button onClick={() => cart.removeItemFromCart(data.id)} className='btn btn-outline-secondary mx-1 mb-5'>-</button>
                        <button onClick={() => cart.deleteFromCart(data.id)} className='btn btn-outline-danger mx-1 mb-5'>delete from basket</button>
                    </>
                ) :
                    (
                        <button className=' btn btn-outline-secondary mb-5' onClick={() => cart.addItemToCart(data.id)} id={data.id} >{children}</button>
                    )}
            </div>
        </div>
    )
}